import React, { useState } from 'react';
import { Tag } from 'antd';
const { CheckableTag } = Tag;

interface PropsType {
  onCheckChange: (checked) => void
}

export const FilterTag: React.FC<PropsType> = (props) => {
  
  const [checked, setChecked] = useState(false);

  const handleChange = checked => {
    setChecked(checked);
    props.onCheckChange(checked)
  }; 

  return (
    <CheckableTag {...props}  checked={checked} onChange={handleChange} />
  )
}
