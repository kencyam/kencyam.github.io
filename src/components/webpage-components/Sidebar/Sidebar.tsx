/*Making is specific to Music Blog until I understand making it generically for other future pages */

export default function SideBar() {
  return (
    <aside>
      <ul>
        <li>
          <details>
            <summary>Topic 1</summary>
            <ul>
              <li>Post 1</li>
              <li>Post 2</li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>Topic 2</summary>
            <ul>
              <li>Post 3</li>
              <li>Post 4</li>
            </ul>
          </details>
        </li>
      </ul>
    </aside>
  );
}

/*
-Responsive: must be able to shrink and also collapse to the side with a button to expand and collapse
-Organized: must have related topics with blog posts categorically correct under correct tags (which will look into how to tag)
-Time: Most recent posts (maybe 5) on top
*/
