import * as React from "react";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import {
  RichTreeView,
  TreeViewDefaultItemModelProperties,
  TreeItem,
  TreeItemProps,
  useTreeItem,
} from "@mui/x-tree-view";
//import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

import { Link } from "react-router-dom";

export default function TreeArchive() {
  const navigate = useNavigate();
  /*
  return (
    <SimpleTreeView itemID="Archives">
      <TreeItem itemId="archive-2026" label="2026 (6)">
        <TreeItem itemId="archive-july-2026" label="July (1)">
          <TreeItem
            itemId="00006"
            label={
              <Link to="/music-blog/00006">
                Olivia Rodrigo - You Seem Pretty Sad for a Girl So in Love
              </Link>
            }
          />
        </TreeItem>
        <TreeItem itemId="archive-june-2026" label="June (2)">
          <TreeItem
            itemId="00005"
            label={
              <Link to="/music-blog/00005">
                Bright Side Breathing - Harry Prasetya Tan
              </Link>
            }
          />
          <TreeItem
            itemId="00004"
            label={<Link to="/music-blog/00004">Drake - Iceman</Link>}
          />
        </TreeItem>
        <TreeItem itemId="archive-may-2026" label="May (1)">
          <TreeItem
            itemId="00003"
            label={
              <Link to="/music-blog/00003">Drop Dead - Olivia Rodrigo</Link>
            }
          />
        </TreeItem>
        <TreeItem itemId="archive-april-2026" label="April (1)">
          <TreeItem
            itemId="00002"
            label={
              <Link to="/music-blog/00002">
                2025 Billboard Hit Songs I Disiked
              </Link>
            }
          />
        </TreeItem>
        <TreeItem itemId="archive-march-2026" label="March (1)">
          <TreeItem
            itemId="00001"
            label={
              <Link to="/music-blog/00001">
                2025 Billboard Hit Songs I Liked
              </Link>
            }
          />
        </TreeItem>
      </TreeItem>
    </SimpleTreeView>
  );
*/

  const isItemSelectionDisabled = (item: TreeViewDefaultItemModelProperties) =>
    !!item.children && item.children.length > 0;

  //custom overwrite of the TreeViewDefaultItemModelProperties, which does not have url

  const handleItemClick = (event: React.SyntheticEvent, itemId: string) => {
    // We use RichTreeView internal helpers or just a lookup on the dataset to find the item
    const findItemById = (
      nodes: MyCustomTreeItem[],
      id: string,
    ): MyCustomTreeItem | null => {
      for (const node of nodes) {
        if (node.id === id) return node;
        if (node.children) {
          const found = findItemById(node.children, id);
          if (found) return found;
        }
      }
      return null;
    };

    const clickedItem = findItemById(BLOG_ENTRIES, itemId);

    // 3. Check if it's a leaf (no children) and has a url
    if (clickedItem && clickedItem.url && !clickedItem.children) {
      //window.open(clickedItem.url, "_blank"); // Opens in a new tab
      window.location.href = "#/music-blog/" + clickedItem.url; // Use this to open in the same tab
    }
  };

  //Tree interface to add url
  interface MyCustomTreeItem {
    id: string;
    label: string;
    url?: string;
    children?: MyCustomTreeItem[];
  }

  //Data of my blog entries (may need to separate to new file once too big)
  const BLOG_ENTRIES: MyCustomTreeItem[] = [
    {
      id: "music-blog-archives-2026",
      label: "2026",
      children: [
        {
          id: "music-blog-archives-july-2026",
          label: "July",
          children: [
            {
              id: "00007",
              label:
                "Compilation of All Public Charted Billboard Songs Sorted By Year (1959-Present)",
              url: "00007",
            },
            {
              id: "00006",
              label: "misery. - pupsies",
              url: "00006",
            },
          ],
        },
        {
          id: "music-blog-archives-june-2026",
          label: "June",
          children: [
            {
              id: "5",
              label: "Bright Side Breathing - Harry Prasetya Tan",
              url: "00005",
            },
            {
              id: "4",
              label: "Drake - Iceman",
              url: "00004",
            },
          ],
        },
        {
          id: "music-blog-archives-may-2026",
          label: "May",
          children: [
            {
              id: "3",
              label: "Drop Dead - Olivia Rodrigo",
              url: "00003",
            },
          ],
        },
        {
          id: "music-blog-archives-april-2026",
          label: "April",
          children: [
            {
              id: "2",
              label: "2025 Billboard Hit Songs I Disliked",
              url: "00002",
            },
          ],
        },
        {
          id: "music-blog-archives-march-2026",
          label: "March",
          children: [
            {
              id: "1",
              label: "2025 Billboard Hit Songs I Liked",
              url: "00001",
            },
          ],
        },
      ],
    },
  ];

  //#region Recursion function
  //Recursive function to count leaf nodes (nodes without children)
  const countLeafNodes = (node: MyCustomTreeItem): number => {
    if (!node.children || node.children.length === 0) {
      return 1;
    }

    let leafCount = 0;
    for (const child of node.children) {
      leafCount += countLeafNodes(child);
    }

    return leafCount;
  };

  //Recursive function to append counts to parent labels
  const addLeafCountsToLabels = (
    nodes: MyCustomTreeItem[],
  ): MyCustomTreeItem[] => {
    return nodes.map((node) => {
      if (node.children && node.children.length > 0) {
        const leaves = countLeafNodes(node);

        return {
          ...node,
          label: `${node.label} (${leaves})`, // Formats the parent label
          children: addLeafCountsToLabels(node.children), // Recurse down
        };
      }

      return node; // Return leaves exactly as they are
    });
  };

  const processedData = addLeafCountsToLabels(BLOG_ENTRIES);
  //#endregion

  //#region change leafs to Link components

  //#endregion

  return <RichTreeView items={processedData} onItemClick={handleItemClick} />;
}
