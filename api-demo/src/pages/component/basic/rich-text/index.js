const nodes = [
  {
    name: 'div',
    attrs: {
      class: 'my-class',
      style: 'color: red;'
    },
    children: [
      {
        type: 'text',
        text: 'Hello rich-text.'
      }
    ]
  }
];

Page({
  data: {
    nodes,
    nodesText: JSON.stringify(nodes, null, 2),
  },
});
