import parse from '@tiki.vn/mini-html-parser2';
import { isEqual } from '../../utils/common';

const formatNodeImages = (nodes) => {
  return nodes.map((item) => {
    if (item.children) {
      formatNodeImages(item.children);
      if (item.name === 'img') {
        item.attrs.width = '100%';
        item.attrs.height = 'auto';
      }
    }
    return item;
  });
};

const parseToHTMLNodes = (data) =>
  new Promise((resolve, reject) => {
    parse(data, (err, htmlNodes) => {
      if (err) reject(err);
      resolve(htmlNodes);
    });
  });

Component({
  data: {
    isShowMore: false,
    formattedDescription: [],
    formattedSpecifications: [],
  },

  props: {
    className: '',
    isLoading: true,
    specifications: [],
    description: '',
  },

  methods: {
    handleSwitchViewMore() {
      this.setData({
        isShowMore: !this.data.isShowMore,
      });
    },
  },

  // Life cycle
  async didUpdate(prevProps) {
    if (isEqual(prevProps, this.props)) return;

    if (this.props.specifications && this.props.specifications.length) {
      const formattedSpecifications = await Promise.all(
        this.props.specifications
          .map((item) => item.attributes)
          .flat()
          .map(async (item) => ({
            ...item,
            value: formatNodeImages(await parseToHTMLNodes(item.value)),
          })),
      );

      this.setData({
        formattedSpecifications,
      });
    }

    if (this.props.description) {
      const descriptionWithoutStyleTags = this.props.description.replace(
        /<style?.+<\/style>/g,
        '',
      );
      const formattedDescription = formatNodeImages(
        await parseToHTMLNodes(descriptionWithoutStyleTags),
      );

      this.setData({
        formattedDescription,
      });
    }
  },
});
