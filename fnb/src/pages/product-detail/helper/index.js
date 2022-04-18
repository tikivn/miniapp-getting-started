export const initData = (data) => {
  let selectedAttributes = data.attributes.reduce((pre, v) => {
    pre[v._id] = v.default;
    return pre;
  }, {});

  return {
    number: 1,
    additionalFee: 0,
    total: data.price,
    selectedAttributes,
    product: {
      ...data,
      attributes: updateAttributes(data.attributes, selectedAttributes),
    },
  };
};

export const changeProductNumber = (info, v) => {
  let rs = { ...info };
  rs.number = v;
  rs.total = updateTotal(rs);
  return rs;
};

export const updateAttributes = (attrs, sAttrs) => {
  return attrs.map((a) => {
    return {
      ...a,
      values: a.values.map((v) => {
        return {
          ...v,
          checked: sAttrs[a._id].indexOf(v._id) !== -1,
        };
      }),
    };
  });
};

export const updateAdditionalFee = (attrs) => {
  let rs = 0;
  attrs.forEach((a) => {
    a.values.forEach((v) => {
      if (v.checked) rs += v.additionalFee;
    });
  });
  return rs;
};

export const updateTotal = (info) => {
  let rs = (info.product.price + info.additionalFee) * info.number;
  return rs;
};

export const handleAttributeSelect = (info, aId, vId) => {
  let rs = { ...info };
  const changedAttribute = rs.product.attributes.filter(
    (v) => v._id === aId,
  )[0];
  const valueIndex = rs.selectedAttributes[aId].indexOf(vId);

  if (changedAttribute.numberSelectionAllow > 1) {
    if (valueIndex !== -1) rs.selectedAttributes[aId].splice(valueIndex, 1);
    else rs.selectedAttributes[aId].push(vId);
  } else {
    if (valueIndex === -1) rs.selectedAttributes[aId] = [vId];
  }

  rs.product.attributes = updateAttributes(
    rs.product.attributes,
    rs.selectedAttributes,
  );

  rs.additionalFee = updateAdditionalFee(rs.product.attributes);
  rs.total = updateTotal(rs);

  return rs;
};

export const createDataToAddCart = (data) => {
  const selectedAttributes = data.product.attributes.reduce((pre, v) => {
    if (
      !data.selectedAttributes[v._id] ||
      !data.selectedAttributes[v._id].length
    )
      return pre;
    pre.push({
      name: v.name,
      values: v.values.filter((v) => v.checked).map((v) => v.name),
    });
    return pre;
  }, []);
  return {
    note: data.note,
    total: data.total,
    selectedAttributes,
    number: data.number,
    name: data.product.name,
    image: data.product.avatar,
    orderMethod: data.orderMethod,
  };
};
