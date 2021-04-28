const app = getApp();

Page({
  data: {
    bannerWidth: 0,
    windowWidth: 0,
    imageWidth: 0,
    loading: true,
    cellSpacing: 12,
    categories: [],
    saleImage: {
      width: 0,
      height: 0,
    },
    sales: [
    {
      "id": 14462349,
      "sku": "3625969746478",
      "name": "Cân Bằng Cảm Xúc, Cả Lúc Bão Giông",
      "url_key": "can-bang-cam-xuc-ca-luc-bao-giong-p14462349",
      "url_path": "can-bang-cam-xuc-ca-luc-bao-giong-p14462349.html?spid=14462350&src=ss-organic",
      "type": "simple",
      "author_name": "Richard Nicholls",
      "book_cover": {
        "id": 148966,
        "value": "Bìa mềm"
      },
      "short_description": "Một ngày, chúng ta có  khoảng 16 tiếng tiếp xúc với con người, công việc, các nguồn thông tin từ mạng xã hội, loa đài báo giấy… Việc này mang đến cho bạn vô vàn cảm xúc, cả tiêu cực lẫn tích cực....",
      "price": 52800,
      "list_price": 96000,
      "badges": [
        {
          "code": "tikinow",
          "text": "tikinow"
        }
      ],
      "badges_new": [
        {
          "placement": "service",
          "type": "service_badge",
          "code": "tikinow",
          "icon": "https://salt.tikicdn.com/ts/upload/9f/32/dd/8a8d39d4453399569dfb3e80fe01de75.png",
          "icon_width": 56,
          "icon_height": 16,
          "text": "",
          "text_color": "#009900"
        },
        {
          "placement": "under_price",
          "type": "under_price_icon",
          "code": "is_best_price_guaranteed",
          "icon": "https://salt.tikicdn.com/ts/upload/51/ac/cc/528e80fe3f464f910174e2fdf8887b6f.png",
          "icon_width": 124,
          "icon_height": 18,
          "text": ""
        }
      ],
      "discount": 43200,
      "discount_rate": 45,
      "rating_average": 4.7,
      "review_count": 2405,
      "order_count": 0,
      "favourite_count": 0,
      "thumbnail_url": "https://salt.tikicdn.com/cache/280x280/ts/product/fd/61/1d/a19424cfe9d113c32732d93cf2d5f59a.jpg",
      "thumbnail_width": 280,
      "thumbnail_height": 280,
      "has_ebook": false,
      "inventory_status": "available",
      "is_visible": true,
      "productset_id": 243,
      "is_flower": false,
      "is_gift_card": false,
      "inventory": {
        "fulfillment_type": "tiki_delivery"
      },
      "url_attendant_input_form": "",
      "stock_item": {
        "qty": 5944,
        "min_sale_qty": 1,
        "max_sale_qty": 5,
        "preorder_date": false
      },
      "salable_type": "",
      "seller_product_id": 14462350,
      "bundle_deal": false
    },
    {
      "id": 5143339,
      "sku": "9786049709746",
      "name": "999 Lá Thư Gửi Cho Chính Mình – Mong Bạn Trở Thành Phiên Bản Hoàn Hảo Nhất",
      "url_key": "999-la-thu-gui-cho-chinh-minh-mong-ban-tro-thanh-phien-ban-hoan-hao-nhat-p5143339",
      "url_path": "999-la-thu-gui-cho-chinh-minh-mong-ban-tro-thanh-phien-ban-hoan-hao-nhat-p5143339.html?src=ss-organic",
      "type": "simple",
      "author_name": "Miêu Công Tử",
      "book_cover": {
        "id": 148966,
        "value": "Bìa mềm"
      },
      "short_description": "999 Lá Thư Gửi Cho Chính Mình – Mong Bạn Trở Thành Phiên Bản Hoàn Hảo Nhất\n“999 lá thư gửi cho chính mình” là một tác phẩm đặc biệt đầy cảm hứng đến từ tác giả văn học mạng nổi tiếng Miêu Công Tử,...",
      "price": 54450,
      "list_price": 99000,
      "badges": [
        {
          "code": "tikinow",
          "text": "tikinow"
        }
      ],
      "badges_new": [
        {
          "placement": "service",
          "type": "service_badge",
          "code": "tikinow",
          "icon": "https://salt.tikicdn.com/ts/upload/9f/32/dd/8a8d39d4453399569dfb3e80fe01de75.png",
          "icon_width": 56,
          "icon_height": 16,
          "text": "",
          "text_color": "#009900"
        },
        {
          "placement": "under_price",
          "type": "under_price_icon",
          "code": "is_best_price_guaranteed",
          "icon": "https://salt.tikicdn.com/ts/upload/51/ac/cc/528e80fe3f464f910174e2fdf8887b6f.png",
          "icon_width": 124,
          "icon_height": 18,
          "text": ""
        }
      ],
      "discount": 44550,
      "discount_rate": 45,
      "rating_average": 4.7,
      "review_count": 2284,
      "order_count": 0,
      "favourite_count": 0,
      "thumbnail_url": "https://salt.tikicdn.com/cache/280x280/ts/product/c4/46/99/0dcc6e04aca0a78cda09a2d8b156dccb.jpg",
      "thumbnail_width": 280,
      "thumbnail_height": 280,
      "has_ebook": false,
      "inventory_status": "available",
      "is_visible": true,
      "productset_id": 243,
      "is_flower": false,
      "is_gift_card": false,
      "inventory": {
        "fulfillment_type": "tiki_delivery"
      },
      "url_attendant_input_form": "",
      "stock_item": {
        "qty": 214,
        "min_sale_qty": 1,
        "max_sale_qty": 5,
        "preorder_date": false
      },
      "salable_type": "",
      "seller_product_id": 5143341
    },
    {
      "id": 31579132,
      "sku": "2035700027826",
      "name": "Không Phải Chưa Đủ Năng Lực , Mà Là Chưa Đủ Kiên Định",
      "url_key": "khong-phai-chua-du-nang-luc-ma-la-chua-du-kien-dinh-p31579132",
      "url_path": "khong-phai-chua-du-nang-luc-ma-la-chua-du-kien-dinh-p31579132.html?src=ss-organic",
      "type": "simple",
      "author_name": "Hàn Xuân Trạch",
      "book_cover": {
        "id": 148966,
        "value": "Bìa mềm"
      },
      "short_description": "KHÔNG PHẢI CHƯA ĐỦ NĂNG LỰC, MÀ LÀ CHƯA ĐỦ KIÊN ĐỊNH\nBạn định sẽ giảm cân sớm thôi, nhưng không bao giờ ngừng nuông chiều bản thân, ăn uống vô độ?\nBạn quyết tâm học hành, làm việc chăm chỉ, nhưng cứ...",
      "price": 35500,
      "list_price": 71000,
      "badges": [
        {
          "code": "tikinow",
          "text": "tikinow"
        }
      ],
      "badges_new": [
        {
          "placement": "service",
          "type": "service_badge",
          "code": "tikinow",
          "icon": "https://salt.tikicdn.com/ts/upload/9f/32/dd/8a8d39d4453399569dfb3e80fe01de75.png",
          "icon_width": 56,
          "icon_height": 16,
          "text": "",
          "text_color": "#009900"
        },
        {
          "placement": "under_price",
          "type": "under_price_icon",
          "code": "is_best_price_guaranteed",
          "icon": "https://salt.tikicdn.com/ts/upload/51/ac/cc/528e80fe3f464f910174e2fdf8887b6f.png",
          "icon_width": 124,
          "icon_height": 18,
          "text": ""
        }
      ],
      "discount": 35500,
      "discount_rate": 50,
      "rating_average": 4.7,
      "review_count": 1135,
      "order_count": 0,
      "favourite_count": 0,
      "thumbnail_url": "https://salt.tikicdn.com/cache/280x280/ts/product/b5/75/f0/fa0aa22f1ee2d92f00e19e1ee23e3c58.png",
      "thumbnail_width": 280,
      "thumbnail_height": 280,
      "has_ebook": false,
      "inventory_status": "available",
      "is_visible": true,
      "productset_id": 243,
      "is_flower": false,
      "is_gift_card": false,
      "inventory": {
        "fulfillment_type": "tiki_delivery"
      },
      "url_attendant_input_form": "",
      "stock_item": {
        "qty": 1208,
        "min_sale_qty": 1,
        "max_sale_qty": 5,
        "preorder_date": false
      },
      "salable_type": "",
      "seller_product_id": 31579133
    },
    {
      "id": 6201209,
      "sku": "9908102785867",
      "name": "Sống Thực Tế Giữa Đời Thực Dụng",
      "url_key": "song-thuc-te-giua-doi-thuc-dung-p6201209",
      "url_path": "song-thuc-te-giua-doi-thuc-dung-p6201209.html?src=ss-organic",
      "type": "simple",
      "author_name": "Mễ Mông",
      "book_cover": {
        "id": 148966,
        "value": "Bìa mềm"
      },
      "short_description": "THỰC DỤNG Ư? KHÔNG HỀ, TÔI CHỈ RẤT THỰC TẾ THÔI!\nCon người muốn trưởng thành đều phải trải qua ba lần lột xác “phá kén hóa bướm”. Lần đầu tiên là khi nhận ra mình không phải trung tâm thế giới. Lần...",
      "price": 65600,
      "list_price": 98000,
      "badges": [
        {
          "code": "tikinow",
          "text": "tikinow"
        }
      ],
      "badges_new": [
        {
          "placement": "service",
          "type": "service_badge",
          "code": "tikinow",
          "icon": "https://salt.tikicdn.com/ts/upload/9f/32/dd/8a8d39d4453399569dfb3e80fe01de75.png",
          "icon_width": 56,
          "icon_height": 16,
          "text": "",
          "text_color": "#009900"
        },
        {
          "placement": "under_price",
          "type": "under_price_icon",
          "code": "is_best_price_guaranteed",
          "icon": "https://salt.tikicdn.com/ts/upload/51/ac/cc/528e80fe3f464f910174e2fdf8887b6f.png",
          "icon_width": 124,
          "icon_height": 18,
          "text": ""
        }
      ],
      "discount": 32400,
      "discount_rate": 33,
      "rating_average": 4.7,
      "review_count": 2344,
      "order_count": 0,
      "favourite_count": 0,
      "thumbnail_url": "https://salt.tikicdn.com/cache/280x280/ts/product/25/d6/2c/f88080bba78a779fb78e1b76b73a9813.jpg",
      "thumbnail_width": 280,
      "thumbnail_height": 280,
      "has_ebook": false,
      "inventory_status": "available",
      "is_visible": true,
      "productset_id": 243,
      "is_flower": false,
      "is_gift_card": false,
      "inventory": {
        "fulfillment_type": "tiki_delivery"
      },
      "url_attendant_input_form": "",
      "stock_item": {
        "qty": 1745,
        "min_sale_qty": 1,
        "max_sale_qty": 5,
        "preorder_date": false
      },
      "salable_type": "",
      "seller_product_id": 6201211,
      "bundle_deal": false
    },],
    banners: []
  },
  onLoad() {
    // Get sales
    my.request({
      url: 'https://tiki.vn/api/v2/landingpage/products?urlKey=nhap-bkgiam30-giam-them-30-toi-da-100k-cho-dh-tu-299k&categoryId=52942&category=52942&limit=4&page=1',
      method: 'GET',
      headers: {
        'User-Agent': 'TikiNative'
      },
      success: (response) => {
        console.log('Product Reponse: ', response)
        this.setData({ sales: response.data, loading: false });
      },
      fail: (fail) => {
        console.log('Fail', fail);
      }
    });

    // Get categories
    my.request({
      url: 'https://tiki.vn/api/v2/categories?parent_id=2&include_in_menu=true',
      method: 'GET',
      headers: {
        'User-Agent': 'TikiNative'
      },
      success: (response) => {
        console.log('Categories Reponse: ', response)
        const categories = response.data.map(
          item => ({ title: item.name, ...item, loading: true, products: [] })
        );
        console.log('categories :>> ', categories);
        this.setData({ categories }, () => this.getProductByCategory(0));
      },
    });

    // Get size
    my.getSystemInfo({
      success: (info) => {
        console.log('System info: ', info);
        this.setData({ 
          saleImage: {
            width: info.windowWidth,
            height: Math.round(info.windowWidth * 34 / 360)
          },
          bannerWidth: info.windowWidth - this.data.cellSpacing * 2,
          windowWidth: info.windowWidth,
          imageWidth: info.windowWidth / 2 - this.data.cellSpacing * 2,
        })
      }
    });
  },
  getProductByCategory(catIndex) {
    const {title, id} = this.data.categories[catIndex];

    my.request({
      url: `https://tiki.vn/api/v2/products?limit=12&is_mweb=1&aggregations=1&categoryId=${id}&category=${id}&page=1`,
      method: 'GET',
      headers: {
        'User-Agent': 'TikiNative'
      },
      success: (response) => {
        console.log(`Product of category ${title}`, response.data);
        const categories = this.data.categories.map(
          (item, catIdx) => catIdx === catIndex 
            ? {...item, products: response.data, loading: false} 
            : item 
        );
        this.setData({ categories });
      }
    });
  },
  onTabChange(e) {
    if (this.data.categories[e.detail.index].products.length) {
      return;
    }

    // Get products
    this.getProductByCategory(e.detail.index);
  },
  onPageAddCart(product) {
    app.onAppAddCart(product);

    // Show toast
    my.showToast({
      type: 'success',
      content: 'Sản phẩm đã được thêm vào giỏ hàng',
      buttonText: 'OK',
      duration: 3000,
    });

    // Set TabBar Badge
    my.setTabBarBadge({
      index: 1,
      text: app.cart.count,
    });
  },
});
