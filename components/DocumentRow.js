import React from 'react';
import { useRouter } from 'next/router'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';

const DocumentRow = ({ doc }) => {

  const router = useRouter();

  return (
    <div onClick={() => router.push(`/doc/${doc?.id}`)} className="flex items-center p-4 rounded-lg hover:bg-gray-100 text-gray-700 cursor-pointer text-sm border mb-2">
      <DescriptionIcon />
      <p className="flex-grow ml-5 w-10 mr-10 truncate">{doc?.fileName}</p>
      <p className="text-sm mr-6">{doc?.timestamp?.toDate().toLocaleDateString()}</p>
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    </div>
  );
}

export default DocumentRow;
