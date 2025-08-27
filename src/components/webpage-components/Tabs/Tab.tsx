/*export const TabName = ({ text }: { text: string }) => {
    return {text};
}

//If needed so far, no
export const ID = ({value}: {value: number}) => {
    return value;
}

interface Props {
    name: React.ReactNode;
}

const Tab: React.FC<Props> = ({name}) => {
    return (
        <div className="tab">
            {name}
        </div>
    );
}

export default Tab;*/

import React from 'react'

type Props = {
  title: string
  children: React.ReactNode;
}

const Tab: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>
}

export default Tab