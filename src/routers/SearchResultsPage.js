import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

//COMPONENT
import BlogCard from "../components/BlogCard";
import ItemCard from "../components/ItemCard";
import Loading from "../components/Loading";

//FUNCTION
import { createSlug } from "../util/createSlug";

//ANIMATION
import empty from "../assets/gif/empty.json";
import Lottie from "lottie-react";

const categories = [
  {
    id: 10,
    imageUrl: "https://i.imgur.com/mEtvLrb.jpeg",
    title: "In formex",
  },
  {
    id: 1,
    imageUrl:
      "https://vattuquangcao.org/wp-content/uploads/2022/11/bat-hiflex-thuong-dung-de-quang-cao-kho-lon-ngoai-troi.jpg",
    title: "In bạt hiflex",
  },
  {
    id: 2,
    imageUrl: "https://inmauhanoi.com/wp-content/uploads/2021/07/in-backlit-gia-re-ha-noi-5-e1626321520626.jpg",
    title: "In Backlit",
  },
  {
    id: 3,
    imageUrl: "https://intriphat.com/wp-content/uploads/2021/01/in-backdrop-2.jpg",
    title: "In Backdrop",
  },
  {
    id: 4,
    imageUrl: "https://bizweb.dktcdn.net/100/082/575/files/decal-dan-oto.jpg?v=1641265394346",
    title: "In Decal ô tô",
  },
  {
    id: 5,
    imageUrl: "https://inangiadat.com/public/thumbs/829x829x1/100_66-ipMtm3CavN.webp",
    title: "In băng rôn",
  },
  {
    id: 6,
    imageUrl: "https://thegioiinan.com/hinhanh/sanpham/inan_90/tin_672/The_gioi_in_an_tin_imagebanner_20200706150954381.jpg",
    title: "In lụa canvas",
  },
  {
    id: 7,
    imageUrl: "https://lh3.googleusercontent.com/p/AF1QipNPvfg9LZ7wyQDTEmnMiD0IHz_Vr4iLYORvb7gP=s680-w680-h510",
    title: "In decal pp",
  },
  {
    id: 8,
    imageUrl: "https://cdn-media.sforum.vn/storage/app/media/giakhanh/hashtag%2020%2011/hashtag%2020-11-thumbnail.jpg",
    title: "In hastag cầm tay",
  },
  {
    id: 9,
    imageUrl: "https://innguyenphong.com/Files/44/dich-vu/in-standee.jpg",
    title: "In standee",
  },
  {
    id: 12,
    imageUrl: "https://product.hstatic.net/1000351483/product/tranh-canvas-toi-gian-minimalist-tranh-hien-dai-truu-tuong-co-gai-3_26e15ca8eec44bf7bb38bcc70152a827_master.jpg",
    title: "In tranh canvas",
  },
];

const blogs = [
  {
    id: 1,
    title: "In Backdrop Giá Rẻ tại In Ấn Hoàng Gia",
    description:
      "Backdrop là một phần không thể thiếu trong các sự kiện lớn nhỏ, từ những bữa tiệc cưới sang trọng, buổi sinh nhật ấm áp, đến các sự kiện quảng bá thương hiệu, hội nghị, hay khai trương cửa hàng. Một backdrop đẹp không chỉ làm nổi bật không gian sự kiện mà còn tạo dấu ấn sâu sắc trong lòng khách mời. Tại In Ấn Hoàng Gia, chúng tôi tự hào mang đến dịch vụ in backdrop giá rẻ, đảm bảo sự hài lòng tối đa cho khách hàng.",
    date: "2024-12-03",
    image: "https://inkhanhviet.com/wp-content/uploads/2024/03/in-backdrop-gia-re-tp-hcm-01.jpg",
  },
  {
    id: 11,
    title: "Dịch Vụ In Hashtag Giá Rẻ - Quảng Cáo Hiệu Quả Cho Sự Kiện",
    description:
      "In hashtag đang trở thành xu hướng phổ biến trong các sự kiện, giúp quảng bá thương hiệu một cách sinh động và thu hút. Cùng tìm hiểu dịch vụ in hashtag chuyên nghiệp tại In Ấn Hoàng Gia qua bài viết dưới đây!",
    date: "2024-02-28",
    image: "https://hashtagcamtay.com/wp-content/uploads/2023/03/hashtag-8-3.jpg",
  },
  {
    id: 12,
    title: "Dịch Vụ In Backdrop Chuyên Nghiệp - Giải Pháp Quảng Cáo Ấn Tượng Cho Sự Kiện",
    description:
      "Backdrop đóng vai trò quan trọng trong các sự kiện, hội nghị, tiệc cưới, giúp tạo điểm nhấn chuyên nghiệp và quảng bá thương hiệu hiệu quả. Hãy cùng In Ấn Hoàng Gia khám phá dịch vụ in backdrop chất lượng cao qua bài viết dưới đây!",
    date: "2024-11-20",
    image: "https://bizweb.dktcdn.net/100/393/292/products/dich-vu-lam-backdrop-20-10-tai-ha-noi-gia-re.jpg?v=1696645807220",
  },
  {
    id: 13,
    title: "Dịch Vụ In Bạt Hiflex - Giải Pháp Quảng Cáo Ngoài Trời Hiệu Quả",
    description:
      "In bạt Hiflex là một trong những giải pháp quảng cáo ngoài trời phổ biến, mang lại hiệu quả cao với chi phí hợp lý. Tìm hiểu chi tiết về dịch vụ in bạt Hiflex tại In Ấn Hoàng Gia qua bài viết dưới đây!",
    date: "2024-11-20",
    image: "https://quangcaobinhduong.vn/wp-content/uploads/2024/09/in-bat-hiflex-thu-dau-mot.jpg",
  },
  {
    id: 2,
    title: "In Hashtag Giá Rẻ Tại In Ấn Hoàng Gia",
    description:
      "Sự phát triển của công nghệ in ấn, các sản phẩm in ngày càng đa dạng và mang về nhiều hiệu quả cho các doanh nghiệp. Trong đó dó in hashtag. Nhu cầu sử dụng in Hashtag ở các doanh nghiệp ngày càng lớn thì các đơn vị in mọc lên càng nhiều. Trong bài viết hôm nay, chúng tôi sẽ phân tích kỹ hơn về Hashtag và địa chỉ in uy tín nhất tại Hà Nội. Nếu bạn cũng đang ở khu vực này, đừng bỏ lỡ các thông tin mà chúng tôi sắp chia sẻ sau đây.",
    date: "2024-11-28",
    image: "https://instandeebinhthanh.com/wp-content/uploads/2024/11/hashtag-cam-tay-tat-nien-.webp",
  },
  {
    id: 3,
    title: "In Standee Giá Rẻ Tại In Ấn Hoàng Gia",
    description:
      "Standee là một sản phẩm quảng cáo được dùng trong rất nhiều sự kiện hiện nay. Standee cũng có vai trò rất quan trọng trong marketing. Tìm hiểu quá trình in standee qua bài viết sau đây của In ấn Hoàng Gia",
    date: "2024-11-20",
    image: "https://vgoevent.com/wp-content/uploads/2023/05/standee-team-building.jpg",
  },
  {
    id: 5,
    title: "In Backdrop tiệc tất niên",
    description:
      "Thời điểm cuối năm đang tới gần, bạn cần tìm một nơi in backdrop tiệc tất niên chất lượng cao, uy tín và nhanh chóng? Hãy tham khảo dịch vụ in backdrop tiệc tất niên của In ấn Hoàng Gia được giới thiệu trong bài viết sau đây.",
    date: "2024-09-02",
    image: "https://inmauhanoi.com/wp-content/themes/yootheme/cache/b7/in-backdrop-tiec-tat-nien-b71a1a30.webp",
  },
  {
    id: 6,
    title: "In băng rôn khẩu hiệu chất lượng, uy tín",
    description:
      "Bạn đang cần tim một địa chỉ in băng rôn khẩu hiệu đẹp tại Hà Nội? In ấn Hoàng Gia cung cấp dịch vụ in băng rôn khẩu hiệu giá rẻ, sản phẩm in chất lượng. Quý khách có nhu cầu đặt in, cùng chúng tôi tìm hiểu về dịch vụ in băng rôn khẩu hiệu mới nhất năm 2023, ứng dụng, ưu điểm ra sao,… trong bài viết dưới đây!",
    date: "2024-08-31",
    image: "https://incucre.com/wp-content/uploads/2018/07/7.png",
  },
  {
    id: 7,
    title: "Phông nền là gì? in phông nền ở đâu?",
    description:
      "Phông nền là gì? In phông nền bằng chất liệu gì? Cần lưu ý những điều gì khi in phông nền. Các bạn hãy tìm hiểu cùng In ấn Hoàng Gia với bài viết dưới đây nhé!",
    date: "2024-03-26",
    image: "https://inmauhanoi.com/wp-content/themes/yootheme/cache/cb/in-phong-nen-1-e1703579863533-cb16b936.webp",
  },
  {
    id: 8,
    title: "Giá in banner ngang cạnh tranh nhất hiện nay",
    description:
      "Banner là công cụ truyền thông hiệu quả, linh hoạt và tiết kiệm trong thời đại kỹ thuật số. Tại In ấn Hoàng Gia, chúng tôi cung cấp dịch vụ in banner ngang chất lượng với giá thành cạnh tranh.",
    date: "2024-09-10",
    image: "https://inmauhanoi.com/wp-content/themes/yootheme/cache/01/gia-in-banner-ngang-2-e1703585500775-01ba038c.webp",
  },
  {
    id: 9,
    title: "In băng rôn cổ vũ giá rẻ",
    description:
      "Băng rôn cổ vũ là vật dụng không thể thiếu trong mỗi sự kiện thể thao, nghệ thuật. Trong bài viết này, chúng tôi sẽ giới thiệu cho bạn một địa chỉ in băng rôn cổ vũ giá rẻ với chất lượng cao – In Màu Hà Nội. ",
    date: "2024-09-11",
    image: "https://inmauhanoi.com/wp-content/themes/yootheme/cache/2f/in-bang-ron-co-vu-gia-re-2f58a0fc.webp",
  },
  {
    id: 10,
    title: "In backdrop đám cưới tại Hà Nội",
    description:
      "In Backdrop đám cưới ngày nay trở nên được chú trọng, trở thành một thứ không thể thiếu trong các đám hỏi, lễ cưới. Được hiểu theo nghĩa đơn giản, Backdrop là phông nền và được in dưới nhiều hình thức khác nhau. In ấn Hoàng Gia luôn đảm bảo một mức giá hợp lý nhất, hỗ trợ mọi lúc mọi nơi với chất lượng sản phẩm tốt.",
    date: "2024-09-11",
    image: "https://inmauhanoi.com/wp-content/themes/yootheme/cache/5b/in-background-dam-cuoi-4-5bdf1c83.webp",
  },
];

function SearchResultsPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q") || "";
  const navigate = useNavigate();

  // Filter blogs and categories based on query
  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(query.toLowerCase()) ||
      blog.description.toLowerCase().includes(query.toLowerCase()),
  );

  const filteredCategories = categories.filter((category) =>
    category.title.toLowerCase().includes(query.toLowerCase()),
  );

  const handleBlogClick = (title) => {
    const slug = createSlug(title);
    navigate(`/tin-tuc/${slug}`);
  };

  const handleCategoriesClick = (title) => {
    const slug = createSlug(title);
    navigate(`/danh-muc-in/${slug}`);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="search-results-page pt-4 pb-10 md:pt-6 lg:py-10">
      <div className="container">
        {loading ? (
          <div className="py-28">
            <Loading pt="32" />
          </div>
        ) : (
          <div>
            <div className="search-results-page__title uppercase text-lg text-emerald-700 pb-3 border-b">
              Kết quả tìm kiếm cho: <strong className="italic">{query}</strong>
            </div>
            {filteredBlogs.length > 0 || filteredCategories.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-6">
                {filteredBlogs.map((blog, index) => (
                  <div
                    className="blog-card__item"
                    key={blog.id}
                    onClick={() => handleBlogClick(blog.title)}
                  >
                    <BlogCard
                      title={blog.title}
                      image={blog.image}
                      description={blog.description}
                      date={blog.date}
                    />
                  </div>
                ))}
                {filteredCategories.map((category, index) => (
                  <div
                    className="blog-card__item"
                    key={category.id}
                    onClick={() => handleCategoriesClick(category.title)}
                  >
                    <ItemCard
                      image={category.imageUrl}
                      link={`/danh-muc-in/${createSlug(category.title)}`}
                      title={category.title}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="search-results-page__result-text text-base text-gray-500 pt-3">
                <p>Không tìm thấy kết quả nào.</p>
                <div className="quotation-page__animate py-6 md:py-8w-full flex items-center justify-center">
                  <Lottie
                    animationData={empty}
                    loop={true}
                    className="w-48 md:w-64"
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchResultsPage;
