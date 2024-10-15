import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";

//COMPONENTS
import NavSidebar from "../components/NaviSidebar";
import BlogSidebar from "../components/BlogSidebar";
import HeadingSection from "../components/HeadingSection";
import MultiColumn from "../components/MultiColumn";
import Tag from "../components/Tag";
import Loading from "../components/Loading";

//HOOKS
import useDocumentTitle from "../hooks/useDocumentTitle";

// FUNCTION
import { createSlug } from "../util/createSlug";

function PolicyPage() {
  const icons = `<svg class="w-6 h-6 text-emerald-700 dark:text-emerald-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeWidth="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"/>
  </svg>`;

  const policies = useMemo(
    () => [
      {
        title: "Điều khoản dịch vụ",
        content: `<div class="policy-page__box">
      <h6 class="policy-page__title text-base text-emerald-700 uppercase py-3">
        1.Giới thiệu dịch vụ
      </h6>
      <p class="policy-page__paragraph text-base text-gray-500">
        Cảm ơn quý khách đã ghé thăm website của công ty chúng tôi.
        Bằng việc sử dụng dịch vụ của chúng tôi có nghĩa là bạn đồng
        thuận với những quy định này. Do đó vui lòng đọc kỹ các điều
        khoản này.
      </p>
      <h6 class="policy-page__title text-base text-emerald-700 uppercase py-3">
        2.Điều khoản chung
      </h6>
      <p class="policy-page__paragraph text-base text-gray-500 pb-2">
        + Website có quyền chỉnh sửa, thay đổi, thêm hoặc xóa bỏ bất
        kỳ phần nào trong chính sách mua bán này bất cứ lúc nào. Mọi
        thay đổi sẽ áp dụng ngay khi đăng công khai trên website mà
        không cần báo trước. Việc quý khách tiếp tục sử dụng dịch vụ
        tại website khi nội dung đã đăng tải đồng nghĩa với việc quý
        khách đồng ý với mọi thay đổi này.
      </p>
      <p class="policy-page__paragraph text-base text-gray-500">
        + Chúng tôi có thể tiếp cận để quảng cáo tới khách hàng các
        dịch vụ khác hợp pháp theo quy định của pháp luật. Nội dung
        quảng cáo phù hợp với khuôn khổ pháp lý của nước sở tại và
        luật pháp quốc tế.
      </p>
      <h6 class="policy-page__title text-base text-emerald-700 uppercase py-3">
        3.Độ tuổi và hành vi hoạt động trên trang
      </h6>
      <p class="policy-page__paragraph text-base text-gray-500 pb-2">
        + Khách hàng khi truy cập có thực hiện mua hàng trên website
        phải từ 18 tuổi trở lên hoặc có sự giám sát của cha mẹ hoặc
        người giám hộ. Khách hàng phải có đầy đủ năng lực hành vi dân
        sự theo quy định của pháp luật Việt Nam.
      </p>
      <p class="policy-page__paragraph text-base text-gray-500 pb-2">
        + Khách hàng không được sử dụng trái phép dịch vụ của công ty
        chúng tôi. Mọi hành vi sử dụng dịch vụ của chúng tôi đều phải
        tuân theo quy định hiện hành của pháp luật nước sở tại và phù
        hợp với luật pháp quốc tế. Chúng tôi có thể đơn phương dừng
        cung cấp dịch vụ nếu khách hàng vi phạm, hoặc chúng tôi đang
        điều tra khi có dấu hiệu vi phạm.
      </p>
      <p class="policy-page__paragraph text-base text-gray-500 pb-4">
        + Việc bạn sử dụng dịch vụ của chúng tôi không đồng nghĩa việc
        bạn được quyền sở hữu các tài nguyên thuộc về sở hữu trí tuệ
        của chúng tôi. Ngoài ra bạn không được phép sử dụng bất cứ tài
        liệu, hình ảnh, video, logo mang thương hiệu của chúng tôi.
        Trường hợp đặc biệt phải được sự đồng ý bằng văn bản của chúng
        tôi.
      </p>
    </div>`,
      },
      {
        title: "Chính sách giao hàng",
        content: `<div class="policy-page__box">
      <h6 class="policy-page__title text-base text-emerald-700 uppercase py-3">
        1.Với khách hàng trong nội thành Hà Nội
      </h6>
      <p class="policy-page__paragraph text-base text-gray-600 pb-2">
      + Miễn phí vận chuyển trong các trường hợp:
      </p>
      <p class="policy-page__paragraph text-base text-gray-500 pb-2">
      – Giá trị đơn hàng trên 2.000.000vnđ; Hàng không quá cồng kềnh và có thể vận chuyển bằng mô tô 2 bánh đảm bảo an toàn hoặc nếu gửi qua bưu điện thể tích không vượt quá 0,05m3.
      </p>
      <p class="policy-page__paragraph text-base text-gray-500">
      – Khách hàng có voucher khuyến mại vận chuyển; hoặc mặt hàng có ưu đãi vận chuyển theo chính sách riêng từng sản phẩm của công ty.
      </p>
      <p class="policy-page__paragraph text-base text-gray-600 py-2">
      + Tính phí vận chuyển với trường hợp
      </p>
      <ul class="policy-page__list ms-8 list-disc">
        <li class="text-base text-gray-500 pb-1">Không có một trong hai điều kiện bên trên.</li>
        <li class="text-base text-gray-500 pb-1">Hàng hóa cồng kềnh</li>
        <li class="text-base text-gray-500 pb-1">Trong các trường hợp này, mức phí tính theo giao hàng grab hoặc gửi hàng qua bưu điện.</li>
      </ul>
      <h6 class="policy-page__title text-base text-emerald-700 uppercase py-3">
        2.Với khách hàng tại các tỉnh thành trong cả nước
      </h6>
      <p class="policy-page__paragraph text-base text-gray-500 pb-2">
      In ấn Hoàng Gia giao hàng tận nơi cho khách hàng tại các thành phố lớn trong cả nước. Hình thức gửi hàng thông qua bưu điện hoặc gửi xe khách đi các tỉnh. Một số trường hợp quận huyện xa xôi, khó khăn trong giao hàng, quý khách vui lòng lấy hàng tại văn phòng nhà xe ở tỉnh thành đó.
      </p>
      <p class="policy-page__paragraph text-base text-gray-500 pb-4">
      Trường hợp gửi bưu điện, phần tiền còn lại sẽ được thanh toán khi khách hàng nhận hàng. Với trường hợp gửi xe khách không có dịch vụ thu hộ, khách hàng vui lòng thanh toán trước khi chúng tôi gửi hàng. Trường hợp này chúng tôi sẽ gửi mẫu hàng đã sản xuất hoặc gửi clip chi tiết để khách hàng nghiệm thu.
      </p>
    </div>`,
      },
      {
        title: "Chính sách đổi trả và hoàn tiền",
        content: `<div class="policy-page__box">
      <h6 class="policy-page__title text-base text-emerald-700 uppercase py-3">
        1.Trường hợp được đổi trả hàng
      </h6>
      <p class="policy-page__paragraph text-base text-gray-500">
      Quý khách có thể được đổi trả hàng khi số lượng sản phẩm do In ấn Hoàng Gia sản xuất ra bị lỗi nhiều trên 40% quý khách có thể được hoàn lại tiền hoặc hoàn lại bằng sản phẩm mới tưng ứng số sản phẩm quý khách đã nhận đặt in
      Sản phẩm phải còn được nguyên tem nguyên đai nguyên kiện chưa có dấu hiệu bị xước, rách, hay bẩn và chưa được sử đụng
      </p>
      <h6 class="policy-page__title text-base text-emerald-700 uppercase py-3">
        2. Sản phẩm giao hàng không đúng theo đơn
      </h6>
      <p class="policy-page__paragraph text-base text-gray-500 pb-2">
      Trong trường hợp mà bạn cảm thấy sản phẩm của bạn đặt in mà không đúng như theo trên đơn hàng thì hay nhanh tay liên hệ lại với In ấn Hoàng Gia cảu chúng tôi để được nhân viên tư vấn và kiểm tra lại sản phẩm. Nếu đúng như giao hàng sai chúng tôi sẽ thu lại và hoàn lại sản phẩm cho bạn theo đúng như đơn
      </p>
      <h6 class="policy-page__title text-base text-emerald-700 uppercase py-3">
        3.Điều kiện đổi trả hàng
      </h6>
      <p class="policy-page__paragraph text-base text-gray-500 pb-2">
      Trong vòng 1 ngày bạn phải liên lạc lại ngay cho chúng tôi để được đổi trả, gọi ngay theo số điện thoại trên để được làm thủ tục đổi trả
      </p>
      <p class="policy-page__paragraph text-base text-gray-500 pb-2">Điều kiện đổi trả hàng:</p>
      <p class="policy-page__paragraph text-base text-gray-500 pb-2">
      – Sản phẩm gửi lại phải còn nguyên đai nguyên kiện
      </p>
      <p class="policy-page__paragraph text-base text-gray-500 pb-2">
      – Phiếu bảo hành (nếu có) và tem của công ty trên sản phẩm còn nguyên vẹn
      </p>
      <p class="policy-page__paragraph text-base text-gray-500 pb-2">
      – Sản phẩm đổi/ trả phải còn đầy đủ hộp, giấy Hướng dẫn sử dụng và chưa qua sử dụng
      </p>
      <p class="policy-page__paragraph text-base text-gray-500 pb-4">
      – Quý khách chịu chi phí vận chuyển, đóng gói, thu hộ tiền, chi phí liên lạc tối đa tương đương 20% giá trị đơn hàng
      </p>
    </div>`,
      },
      {
        title: "Chính sách bảo mật thông tin",
        content: `<div class="policy-page__box">
      <h6 class="policy-page__title text-base text-emerald-700 uppercase py-3">
        1.Mục đích và phạm vi thu thập thông tin
      </h6>
      <p class="policy-page__paragraph text-base text-gray-500 pb-2">
      Website này được In ấn Hoàng Gia quản lý. Khi mỗi khách hàng truy cập vào website này, trang web sẽ tự động lưu địa chỉ IP cùng với tên miền. Chúng tôi cũng sử dụng các công cụ kiểm tra như “cookie”. Một tài khoản cookie sẽ lưu trữ dữ liệu mà server của website gửi đến trình duyệt của khách hàng khi khách hàng truy cập vào trang web, việc sử dụng chức năng này sẽ giúp chúng tôi hỗ trợ và tìm hiểu nhu cầu, thị hiếu của khách hàng khi truy cập vào website của chúng tôi.
      </p>
      <p class="policy-page__paragraph text-base text-gray-500 pb-2">
      Chúng tôi cũng kết hợp thông tin về địa chỉ IP và tên miền của khách hàng cùng với các thông tin khác mà khách hàng cung cấp. Các thông tin này được cung cấp qua những email khách hàng gửi cho chúng tôi, hoặc các thông tin khách hàng điền khi muốn đăng ký, ý kiến phản hồi, những yêu cầu được hỗ trợ, trả lời phiếu điều tra hoặc tham gia vào một cuộc thi/ các hoạt động khuyến mại.
      </p>
      <p class="policy-page__paragraph text-base text-gray-500">
      In ấn Hoàng Gia luôn luôn bảo mật thông tin cho tất cả các khách hàng đến đặt in sản phẩm của chúng tôi . Chúng tôi cam kết không bán thông tin hay làm gì ảnh hưởng đến thông tin của khác hàng, và không để cho bên thứ 3 biết.
      </p>
      <h6 class="policy-page__title text-base text-emerald-700 uppercase py-3">
        2.Phạm vi sử dụng thông tin
      </h6>
      <p class="policy-page__paragraph text-base text-gray-500 pb-2">
      Thông tin cá nhân thu thập được sẽ chỉ được <span class="text-emerald-600 italic">inanhoanggia.vn</span> sử dụng trong nội bộ công ty và cho một hoặc tất cả các mục đích sau đây:
      </p>
      <p class="policy-page__paragraph text-base text-gray-500 pb-2">
      – Hỗ trợ khách hàng
      </p>
      <p class="policy-page__paragraph text-base text-gray-500 pb-2">
      – Cung cấp thông tin liên quan đến dịch vụ
      </p>
      <p class="policy-page__paragraph text-base text-gray-500 pb-2">
      – Xử lý đơn đặt hàng và cung cấp dịch vụ và thông tin qua trang web của chúng tôi theo yêu cầu của bạn
      </p>
      <p class="policy-page__paragraph text-base text-gray-500 pb-2">
      – Chúng tôi có thể sẽ gửi thông tin sản phẩm, dịch vụ mới, thông tin về các sự kiện sắp tới hoặc thông tin tuyển dụng nếu quý khách đăng kí nhận email thông báo.
      </p>
      <p class="policy-page__paragraph text-base text-gray-500">
      – Ngoài ra, chúng tôi sẽ sử dụng thông tin bạn cung cấp để hỗ trợ quản lý tài khoản khách hàng; xác nhận và thực hiện các giao dịch tài chính liên quan đến các khoản thanh toán trực tuyến của bạn;
      </p>
      <h6 class="policy-page__title text-base text-emerald-700 uppercase py-3">
        3.Thời gian lưu trữ thông tin
      </h6>
      <p class="policy-page__paragraph text-base text-gray-500 pb-2">
      Đối với thông tin cá nhân, <span class="text-emerald-600 italic">inanhoanggia.vn</span> chỉ xóa đi dữ liệu này nếu khách hàng có yêu cầu, khách hàng yêu cầu gửi mail về <span class="text-emerald-600 italic">inanhoanggia.ht.85@gmail.com</span>
      </p>
      <h6 class="policy-page__title text-base text-emerald-700 uppercase py-3">
        4.Những người hoặc tổ chức có thể được tiếp cận với thông tin cá nhân
      </h6>
      <p class="policy-page__paragraph text-base text-gray-500 pb-2">
      Đối tượng được tiếp cận với thông tin cá nhân của khách hàng thuộc một trong những trường hợp sau:
      </p>
      <p class="policy-page__paragraph text-base text-gray-500 pb-2">
      – CÔNG TY TNHH IN HOÀNG GIA
      </p>
      <p class="policy-page__paragraph text-base text-gray-500 pb-2">
      – Các đối tác có ký hợp động thực hiện 1 phần dịch vụ do In ấn Hoàng Gia. Các đối tác này sẽ nhận được những thông tin theo thỏa thuận hợp đồng (có thể 1phần hoặc toàn bộ thông tin tuy theo điều khoản hợp đồng) để tiến hành hỗ trợ người dùng sử dụng dịch vụ do Công ty cung cấp.
      </p>
      <h6 class="policy-page__title text-base text-emerald-700 uppercase py-3">
        5.Địa chỉ của đơn vị thu thập và quản lý thông tin cá nhân
      </h6>
      <p class="policy-page__paragraph text-base text-gray-500 pb-2">
      CÔNG TY TNHH IN HOÀNG GIA
      </p>
      <p class="policy-page__paragraph text-base text-gray-500 pb-2">
      Địa chỉ: Số 7A – ngách 18 ngõ 181 đường Xuân Thủy – Quận Cầu Giấy – Hà Nội.
      </p>
      <p class="policy-page__paragraph text-base text-gray-500 pb-2">
      Điện thoại: 0765.28.4567
      </p>
      <p class="policy-page__paragraph text-base text-gray-500 pb-2">
      Website: <span class="text-emerald-600 italic">inanhoanggia.vn</span>
      </p>
      <p class="policy-page__paragraph text-base text-gray-500">
      Email: <span class="text-emerald-600 italic">inanhoanggia.ht.85@gmail.com</span>
      </p>
      <h6 class="policy-page__title text-base text-emerald-700 uppercase py-3">
       6.Phương tiện và công cụ để người dùng tiếp cận và chỉnh sửa dữ liệu cá nhân của mình
      </h6>
      <p class="policy-page__paragraph text-base text-gray-500 pb-2">
      <span class="text-emerald-600 italic">inanhoanggia.vn</span> không thu thập thông tin khách hàng qua trang web, thông tin cá nhân khách hàng được thực hiện thu thập qua email liên hệ đặt mua sản phẩm, dịch vụ gửi về hộp mail của chúng tôi: Hai.inbacviet@gmail.com hoặc số điện thoại liên hệ đặt mua sản phẩm gọi về 094.6666.395
      </p>
      <p class="policy-page__paragraph text-base text-gray-500 pb-2">
      Bạn có thể liên hệ địa chỉ email cùng số điện thoại trên để yêu cầu <span class="text-emerald-600 italic">inanhoanggia.vn</span> chỉnh sửa dữ liệu cá nhân của mình.
      </p>
      <h6 class="policy-page__title text-base text-emerald-700 uppercase py-3">
       7.Cơ chế tiếp nhận và giải quyết khiếu nại của người tiêu dùng liên quan đến việc thông tin cá nhân bị sử dụng sai mục đích hoặc phạm vi đã thông báo
      </h6>
      <p class="policy-page__paragraph text-base text-gray-500 pb-2">
      ại <span class="text-emerald-600 italic">inanhoanggia.vn</span> , việc bảo vệ thông tin cá nhân của bạn là rất quan trọng, bạn được đảm bảo rằng thông tin cung cấp cho chúng tôi sẽ được bảo mật, <span class="text-emerald-600 italic">inanhoanggia.vn</span> cam kết không chia sẻ, bán hoặc cho thuê thông tin cá nhân của bạn cho bất kỳ người nào khác. <span class="text-emerald-600 italic">inanhoanggia.vn</span> cam kết chỉ sử dụng các thông tin của bạn vào các trường hợp sau:
      </p>
      <p class="policy-page__paragraph text-base text-gray-500 pb-2">
      – Nâng cao chất lượng dịch vụ dành cho khách hàng
      </p>
      <p class="policy-page__paragraph text-base text-gray-500 pb-2">
      – Giải quyết các tranh chấp, khiếu nại
      </p>
      <p class="policy-page__paragraph text-base text-gray-500 pb-2">
      – Khi cơ quan pháp luật có yêu cầu.
      </p>
      <p class="policy-page__paragraph text-base text-gray-500 pb-4">
      <span class="text-emerald-600 italic">inanhoanggia.vn</span> hiểu rằng quyền lợi của bạn trong việc bảo vệ thông tin cá nhân cũng chính là trách nhiệm của chúng tôi nên trong bất kỳ trường hợp có thắc mắc, góp ý nào liên quan đến chính sách bảo mật của <span class="text-emerald-600 italic">inanhoanggia.vn</span> , và liên quan đến việc thông tin cá nhân bị sử dụng sai mục đích hoặc phạm vi đã thông báo vui lòng liên hệ qua số hotline 0756.38.4567 hoặc email: <span class="text-emerald-600 italic">inanhoanggia.ht.85@gmail.com</span>
      </p>
    </div>`,
      },
    ],
    []
  );

  const { slug } = useParams();
  const [policyContent, setPolicyContent] = useState(null);

  useEffect(() => {
    const policy = policies.find((policy) => createSlug(policy.title) === slug);
    if (policy) {
      setPolicyContent(policy.content);
    } else {
      setPolicyContent(
        `<p class="text-base text-gray-600 pb-4">Không tìm thấy chính sách này.</p>`
      );
    }
  }, [slug, policies]);

  // Tìm chính sách dựa trên slug
  const currentPolicy = policies.find(
    (policy) => createSlug(policy.title) === slug
  );

  // Nếu không tìm thấy chính sách, hiển thị "Page not found"
  const pageTitle = currentPolicy ? currentPolicy.title : "Page not found";

  useDocumentTitle(pageTitle);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="policy-page pt-4 pb-10 md:pt-6 lg:py-10">
      <div className="container">
        <div className="row flex-col-reverse lg:flex-wrap lg:flex-row">
          <div
            className="col relative"
            style={{ "--col-sm": "12", "--col-md": "4", "--col-lg": "3" }}
          >
            <div className="sticky top-40 pt-4 md:pt-6 lg:pt-0">
              <div className="policy-page__item">
                <NavSidebar />
              </div>
              <div className="policy-page__item pt-8">
                <BlogSidebar />
              </div>
            </div>
          </div>
          <div
            className="col"
            style={{ "--col-sm": "12", "--col-md": "8", "--col-lg": "9" }}
          >
            {loading ? (
              <div className="pt-10">
                <Loading pt="32" />
              </div>
            ) : (
              <div>
                <div className="policy-page__heading">
                  <HeadingSection title={pageTitle} icon={icons} />
                </div>
                <div
                  className="policy-page__content pt-4"
                  dangerouslySetInnerHTML={{ __html: policyContent }}
                ></div>
                <div className="policy-page__bottom pt-4 border-t">
                  <Tag />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="policy-page__service">
        <MultiColumn />
      </div>
    </div>
  );
}

export default PolicyPage;
