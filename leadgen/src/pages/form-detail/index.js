import qs from 'query-string';

Page({
  data: {
    form: null,
  },
  onLoad(query) {
    const { id } = qs.parse(query);
    this.getForm(id);
  },
  getForm(id) {
    if (!my.leadgen || !id) {
      return;
    }
    my.leadgen.getCustomerResponse({
      id,
      success: (rs) => {
        const fields = rs.form.fields.map((field) => ({
          ...field[Object.keys(field)[0]],
        }));
        this.setData({ form: { ...rs, form: { ...rs.form, fields } } });
        my.setNavigationBar({
          reset: true,
          title: rs.form.title,
        });
      },
    });
  },
});
