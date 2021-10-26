import parse from '@tiki.vn/mini-html-parser2';

const html = `<div class="rt-container">
  <img 
    style="width: 200px; height: 200px" 
    class="rt-image"
    src="https://salt.tikicdn.com/cache/w400/ts/product/5e/18/24/2a6154ba08df6ce6161c13f4303fa19e.jpg" alt="Product" />
  <h3 style="margin: 8px 0;">Cây cam ngọt của tôi</h3>
  <table class="rt-table">
    <tr class="even">
      <td class="col">Danh mục</td>
      <td class="col">Tiểu thuyết</td>
    </tr>
    <tr>
      <td class="col">Cung cấp bởi</td>
      <td class="col">HaAnBooks</td>
    </tr>
    <tr class="even">
      <td class="col">Công ty phát hành</td>
      <td class="col">Nhã Nam </td>
    </tr>
    <tr>
      <td class="col">Kích thước</td>
      <td class="col">14 x 20.5 cm</td>
    </tr>
  </table>
</div>`;

const nodes = [
  {
    name: 'div',
    attrs: {
      class: 'my-class',
      style: 'color: red;',
    },
    children: [
      {
        type: 'text',
        text: 'Simple rich-text.',
      },
    ],
  },
];

Page({
  data: {
    nodes,
    nodesText: JSON.stringify(nodes, null, 2),
    htmlNodes: [],
    htmlNodesText: '',
    showNodesText: false,
    showHtmlNodesText: false,
  },
  onLoad() {
    parse(html, (err, htmlNodes) => {
      if (!err) {
        this.setData({
          htmlNodes,
          htmlNodesText: JSON.stringify(htmlNodes, null, 2),
        });
      }
    });
  },
  onShowNode() {
    this.setData({ showNodesText: !this.data.showNodesText })
  },
  onShowHtmlNode() {
    this.setData({ showHtmlNodesText: !this.data.showHtmlNodesText })
  },
});
