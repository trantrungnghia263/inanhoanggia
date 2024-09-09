import React, { useEffect } from "react";

//AOS ANIMATION
import AOS from "aos";

function MultiColumn() {
  const columns = [
    {
      id: "1",
      icon: (
        <svg
          className="text-green-600"
          width="60"
          height="71"
          viewBox="0 0 60 71"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18.5914 7.32905C14.5097 8.47222 10.4556 9.71526 6.43288 11.0571C6.06554 11.178 5.73902 11.4013 5.49049 11.7016C5.24196 12.0019 5.08142 12.3671 5.02716 12.7556C2.65288 30.8601 8.13859 44.0694 14.6829 52.7711C17.4536 56.4922 20.7575 59.7703 24.4843 62.4963C25.9671 63.5589 27.2786 64.3254 28.3114 64.8176C28.8257 65.0658 29.2457 65.2313 29.5671 65.3315C29.7077 65.3816 29.8527 65.4181 30 65.4404C30.1456 65.4163 30.289 65.3799 30.4286 65.3315C30.7543 65.2313 31.1743 65.0658 31.6886 64.8176C32.7171 64.3254 34.0329 63.5546 35.5157 62.4963C39.2425 59.7702 42.5463 56.4921 45.3171 52.7711C51.8614 44.0738 57.3471 30.8601 54.9728 12.7556C54.9191 12.367 54.7587 12.0015 54.5101 11.7011C54.2615 11.4008 53.9347 11.1776 53.5671 11.0571C50.7771 10.1294 46.0671 8.61819 41.4086 7.33341C36.6514 6.02249 32.2757 5.05129 30 5.05129C27.7286 5.05129 23.3486 6.02249 18.5914 7.33341V7.32905ZM17.4514 2.8432C22.1014 1.55842 27.0429 0.404297 30 0.404297C32.9571 0.404297 37.8986 1.55842 42.5486 2.8432C47.3057 4.14976 52.1014 5.69585 54.9214 6.63222C56.1004 7.0279 57.1457 7.75353 57.9372 8.72577C58.7287 9.698 59.2342 10.8774 59.3957 12.1285C61.95 31.6267 56.0228 46.0772 48.8314 55.6368C45.7819 59.7263 42.1457 63.3275 38.0443 66.3201C36.6261 67.3557 35.1235 68.2663 33.5529 69.0421C32.3529 69.617 31.0629 70.0874 30 70.0874C28.9371 70.0874 27.6514 69.617 26.4471 69.0421C24.8765 68.2663 23.3739 67.3557 21.9557 66.3201C17.8544 63.3274 14.2182 59.7262 11.1686 55.6368C3.97716 46.0772 -1.94998 31.6267 0.604308 12.1285C0.765825 10.8774 1.27135 9.698 2.06281 8.72577C2.85427 7.75353 3.89955 7.0279 5.07859 6.63222C9.17227 5.26821 13.2978 4.00484 17.4514 2.8432V2.8432Z"></path>
          <path d="M42.2316 22.8159C42.4312 23.0182 42.5895 23.2585 42.6975 23.523C42.8055 23.7876 42.8612 24.0712 42.8612 24.3576C42.8612 24.6441 42.8055 24.9277 42.6975 25.1922C42.5895 25.4568 42.4312 25.6971 42.2316 25.8994L29.3745 38.9649C29.1754 39.1677 28.939 39.3286 28.6786 39.4384C28.4183 39.5482 28.1392 39.6047 27.8573 39.6047C27.5755 39.6047 27.2964 39.5482 27.036 39.4384C26.7757 39.3286 26.5392 39.1677 26.3402 38.9649L19.9116 32.4322C19.7124 32.2297 19.5543 31.9893 19.4465 31.7248C19.3387 31.4603 19.2832 31.1767 19.2832 30.8904C19.2832 30.6041 19.3387 30.3206 19.4465 30.056C19.5543 29.7915 19.7124 29.5511 19.9116 29.3487C20.1109 29.1462 20.3474 28.9856 20.6077 28.876C20.868 28.7665 21.147 28.7101 21.4288 28.7101C21.7105 28.7101 21.9895 28.7665 22.2498 28.876C22.5101 28.9856 22.7467 29.1462 22.9459 29.3487L27.8573 34.3441L39.1973 22.8159C39.3964 22.6131 39.6328 22.4522 39.8932 22.3424C40.1535 22.2327 40.4326 22.1761 40.7145 22.1761C40.9963 22.1761 41.2754 22.2327 41.5357 22.3424C41.7961 22.4522 42.0326 22.6131 42.2316 22.8159V22.8159Z"></path>
        </svg>
      ),
      title: "Chất lượng",
      description:
        "Chúng tôi sử dụng nguyên liệu in ấn tốt nhất cùng máy móc hiện đại để mang đến tận tay khách hàng sản phẩm in ấn chất lượng cao.",
    },
    {
      id: "2",
      icon: (
        <svg
          className="text-green-600"
          width="70"
          height="71"
          viewBox="0 0 70 71"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M34.84 0.404297C15.5982 0.404297 0 16.0046 0 35.2458C0 54.4885 15.5982 70.0874 34.84 70.0874C54.0818 70.0874 69.68 54.4885 69.68 35.2458C69.68 16.0046 54.0818 0.404297 34.84 0.404297ZM34.84 64.2804C18.8049 64.2804 5.80667 51.2816 5.80667 35.2458C5.80667 19.21 18.8049 6.21122 34.84 6.21122C50.8751 6.21122 63.8733 19.21 63.8733 35.2458C63.8733 51.2816 50.8751 64.2804 34.84 64.2804Z"></path>
          <path d="M37.0176 10.5664H32.6626V14.9216H37.0176V10.5664Z"></path>
          <path d="M14.5166 33.0682H10.1616V37.4234H14.5166V33.0682Z"></path>
          <path d="M53.9457 19.2163L50.8667 16.1364L47.7868 19.2155L50.8658 22.2955L53.9457 19.2163Z"></path>
          <path d="M15.9708 51.0387L19.0493 54.1191L22.1296 51.0405L19.0511 47.96L15.9708 51.0387Z"></path>
          <path d="M22.0096 19.3347L18.9302 16.2551L15.8508 19.3347L18.9302 22.4142L22.0096 19.3347Z"></path>
          <path d="M47.6706 51.1585L50.75 54.238L53.8294 51.1585L50.75 48.0789L47.6706 51.1585Z"></path>
          <path d="M55.1634 33.0682H32.6626V35.2458V37.4234V55.5701V59.9252H37.0176V55.5701V37.4234H55.1634H59.5184V33.0682H55.1634Z"></path>
        </svg>
      ),
      title: "Thời gian",
      description:
        "Chúng tôi sắp xếp thời gian sản xuất linh hoạt. Có thể đáp ứng tiến độ cho những đơn hàng in ấn với tiến độ nhanh, sản lượng lớn.",
    },
    {
      id: "3",
      icon: (
        <svg
          className="text-green-600"
          width="70"
          height="71"
          viewBox="0 0 70 71"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M66.6428 8.85365V19.7762C66.6428 20.6158 66.3077 21.4211 65.7113 22.0148C65.1149 22.6086 64.306 22.9421 63.4625 22.9421H52.3315C51.8705 22.9473 51.4139 22.8527 50.9933 22.6648C50.5727 22.4768 50.1982 22.2001 49.8957 21.8538C49.5932 21.5075 49.3699 21.0998 49.2414 20.6591C49.1128 20.2183 49.0821 19.755 49.1513 19.3013C49.3008 18.5333 49.7177 17.8424 50.3284 17.3502C50.9392 16.8579 51.7048 16.5959 52.4905 16.6102H56.1479C52.4436 12.5036 47.621 9.55639 42.2661 8.12661C36.9111 6.69683 31.2543 6.84605 25.9829 8.55614C20.7115 10.2662 16.0525 13.4636 12.5719 17.7597C9.09131 22.0558 6.93901 27.2658 6.3765 32.7566C6.2974 33.5402 5.92772 34.2664 5.33966 34.7933C4.75159 35.3201 3.98737 35.6099 3.19622 35.6059C2.75042 35.6082 2.30913 35.5171 1.90098 35.3385C1.49283 35.16 1.12695 34.8981 0.827063 34.5697C0.52718 34.2413 0.300001 33.8538 0.160265 33.4324C0.0205294 33.0109 -0.0286408 32.565 0.0159456 32.1234C0.683863 25.4767 3.25793 19.1614 7.43121 13.9306C11.6045 8.69978 17.2009 4.77416 23.5532 2.62178C29.9054 0.469413 36.7455 0.181115 43.2578 1.79127C49.77 3.40142 55.6797 6.84208 60.2822 11.703V8.69535C60.277 8.23643 60.3721 7.78187 60.5608 7.36316C60.7496 6.94445 61.0276 6.57161 61.3755 6.27045C61.7234 5.9693 62.1329 5.74705 62.5756 5.61909C63.0184 5.49113 63.4837 5.46053 63.9396 5.5294C64.711 5.67828 65.4051 6.09324 65.8995 6.70128C66.394 7.30932 66.6572 8.07148 66.6428 8.85365Z"></path>
          <path d="M3.03718 62.3582V51.4356C3.03718 50.596 3.37224 49.7907 3.96866 49.197C4.56508 48.6032 5.374 48.2697 6.21746 48.2697H17.3484C17.8094 48.2645 18.266 48.3591 18.6867 48.547C19.1073 48.735 19.4818 49.0117 19.7843 49.358C20.0868 49.7043 20.3101 50.112 20.4386 50.5527C20.5672 50.9935 20.5979 51.4568 20.5287 51.9105C20.3792 52.6785 19.9623 53.3694 19.3515 53.8616C18.7407 54.3539 17.9751 54.6159 17.1894 54.6016H13.5321C17.2363 58.7082 22.0589 61.6554 27.4139 63.0852C32.7689 64.515 38.4257 64.3658 43.6971 62.6557C48.9685 60.9456 53.6275 57.7482 57.1081 53.4521C60.5887 49.156 62.741 43.946 63.3035 38.4552C63.3826 37.6716 63.7522 36.9454 64.3403 36.4186C64.9284 35.8917 65.6926 35.6019 66.4837 35.6059C66.9295 35.6036 67.3708 35.6948 67.779 35.8733C68.1871 36.0518 68.553 36.3138 68.8529 36.6421C69.1528 36.9705 69.38 37.358 69.5197 37.7794C69.6594 38.2009 69.7086 38.6468 69.664 39.0884C68.9961 45.7351 66.422 52.0504 62.2488 57.2812C58.0755 62.512 52.4791 66.4377 46.1268 68.59C39.7745 70.7424 32.9345 71.0307 26.4222 69.4205C19.9099 67.8104 14.0002 64.3697 9.39774 59.5088V62.5165C9.40296 62.9754 9.30789 63.4299 9.11912 63.8486C8.93034 64.2674 8.65238 64.6402 8.30449 64.9414C7.9566 65.2425 7.5471 65.4648 7.10436 65.5927C6.66161 65.7207 6.19622 65.7513 5.74042 65.6824C4.96894 65.5335 4.27492 65.1186 3.78047 64.5105C3.28602 63.9025 3.02282 63.1403 3.03718 62.3582Z"></path>
          <path d="M35.9532 32.44C30.3878 31.3319 30.3878 30.3821 30.3878 29.5906C30.3878 28.7991 30.7058 28.6408 31.1828 28.1659C32.0601 27.6964 33.0506 27.4773 34.0451 27.5327C35.8927 27.5168 37.7088 28.0099 39.2925 28.9574C39.6144 29.2189 39.9897 29.4075 40.3922 29.5101C40.7947 29.6127 41.2148 29.6268 41.6234 29.5515C42.0319 29.4762 42.4191 29.3133 42.758 29.074C43.0969 28.8347 43.3794 28.5248 43.5859 28.1659C43.8585 27.8422 44.0595 27.465 44.1759 27.0588C44.2923 26.6526 44.3214 26.2266 44.2614 25.8085C44.2014 25.3903 44.0536 24.9895 43.8276 24.632C43.6016 24.2745 43.3026 23.9684 42.9499 23.7336C41.4378 22.8045 39.7668 22.1605 38.0204 21.834V18.1932C38.0204 17.3535 37.6854 16.5482 37.0889 15.9545C36.4925 15.3608 35.6836 15.0272 34.8401 15.0272C33.9967 15.0272 33.1878 15.3608 32.5913 15.9545C31.9949 16.5482 31.6599 17.3535 31.6599 18.1932V21.6757C26.8894 22.4672 23.7092 25.6332 23.7092 29.9072C23.7092 34.1812 28.9566 37.6638 34.0451 38.6136C39.1335 39.5633 39.2925 40.6714 39.2925 41.4629C39.2925 42.2544 37.5434 43.6791 35.3172 43.6791C32.9759 43.725 30.6846 43.0018 28.7976 41.6212C28.4443 41.3873 28.0475 41.2262 27.6306 41.1473C27.2137 41.0684 26.7852 41.0734 26.3703 41.1619C25.9554 41.2504 25.5625 41.4206 25.2147 41.6627C24.8669 41.9047 24.5713 42.2135 24.3452 42.571C24.0945 42.8679 23.9073 43.2126 23.7951 43.5841C23.6829 43.9555 23.648 44.3459 23.6927 44.7312C23.7374 45.1165 23.8606 45.4887 24.0548 45.825C24.249 46.1612 24.5102 46.4545 24.8223 46.6867C26.8684 48.1163 29.2009 49.0883 31.6599 49.5361V53.0186C31.6599 53.8583 31.9949 54.6636 32.5913 55.2573C33.1878 55.851 33.9967 56.1846 34.8401 56.1846C35.6836 56.1846 36.4925 55.851 37.0889 55.2573C37.6854 54.6636 38.0204 53.8583 38.0204 53.0186V49.5361C39.7648 49.28 41.4103 48.5701 42.7908 47.4782C43.7876 46.7497 44.5959 45.7955 45.1489 44.6945C45.7019 43.5935 45.9838 42.3772 45.9711 41.1463C45.9711 35.2893 40.5646 33.3897 35.9532 32.44Z"></path>
        </svg>
      ),
      title: "Giá thành",
      description:
        "Chúng tôi cam kết cung cấp mức giá in ấn cạnh tranh nhất với mục tiêu hợp tác lâu dài – bền vững - cùng nhau phát triển",
    },
    {
      id: "4",
      icon: (
        <svg
          className="text-green-600"
          width="60"
          height="71"
          viewBox="0 0 60 71"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M47.5594 49.8987L41.3598 47.7429L39.1342 43.0982C41.1393 40.9688 42.5314 38.1513 43.0008 35.2125L43.2784 33.4765H45.6522C47.8098 33.4765 49.5652 31.6449 49.5652 29.3935V20.8193C49.5652 9.56245 40.7883 0.404297 30 0.404297C19.1841 0.404297 10.4348 9.53618 10.4348 20.8193V29.3935C10.4348 31.1677 11.5253 32.6806 13.0435 33.2424V34.8375C13.0435 37.0889 14.7989 38.9205 16.9565 38.9205H18.102C18.6674 40.2022 19.3993 41.3892 20.2899 42.4556C20.4746 42.6771 20.6673 42.8919 20.8646 43.1008L18.6402 47.7429L12.4405 49.8989C5.232 52.4069 0 60.3251 0 68.7264C0 69.478 0.583957 70.0874 1.30435 70.0874H58.6957C59.4159 70.0874 60 69.478 60 68.7264C60 60.3251 54.7681 52.4069 47.5594 49.8987ZM46.9565 29.3935C46.9565 30.144 46.3714 30.7545 45.6522 30.7545H43.6615C43.993 28.0747 44.214 25.223 44.3028 22.4143C44.3054 22.3351 44.3075 22.2581 44.3099 22.1803H46.9565V29.3935ZM14.3478 30.7545C13.6286 30.7545 13.0435 30.144 13.0435 29.3935V22.1803H15.691C15.6953 22.3222 15.6999 22.4648 15.705 22.6084C15.7051 22.6133 15.7054 22.6181 15.7055 22.623C15.7055 22.6234 15.7055 22.6238 15.7055 22.6242C15.7968 25.356 16.0149 28.1337 16.3389 30.7544H14.3478V30.7545ZM16.9565 36.1985C16.2373 36.1985 15.6522 35.588 15.6522 34.8375V33.4765H16.7215L16.999 35.213C17.052 35.5431 17.1171 35.8719 17.1923 36.1985H16.9565ZM15.6544 19.4583H13.093C13.7537 10.3367 21.0492 3.12629 30 3.12629C38.911 3.12629 46.2386 10.3358 46.9068 19.4583H44.3457C44.2518 11.9419 38.3858 5.84829 31.1675 5.84829H28.8327C21.6146 5.84829 15.7482 11.9419 15.6544 19.4583ZM28.8326 8.57028H31.1674C37.012 8.57028 41.7425 13.5585 41.7391 19.6502C41.7391 20.0785 41.7359 20.4514 41.729 20.7907C41.729 20.795 41.7288 20.7995 41.7288 20.804L40.0973 20.5608C35.6652 19.9004 31.4803 17.7171 28.3136 14.4129C28.0689 14.1577 27.7372 14.0143 27.3913 14.0143C23.8883 14.0143 20.5351 15.6796 18.3185 18.493C18.8648 12.9512 23.3547 8.57028 28.8326 8.57028ZM19.8965 36.1985C19.2436 33.9321 18.4964 27.2632 18.3313 22.9896L20.0868 20.5472C21.6991 18.3048 24.2075 16.9116 26.8758 16.7516C30.3867 20.238 34.9287 22.5402 39.7285 23.2553L41.6487 23.5417C41.5204 26.3841 41.2581 29.2365 40.8823 31.8598C40.8822 31.8606 40.882 31.8616 40.8819 31.8625C40.7624 32.7059 40.6683 33.2487 40.4277 34.7647C39.737 39.0879 36.6454 42.9974 32.5642 44.0621C30.8846 44.4997 29.1151 44.4995 27.4364 44.0621C24.8881 43.3974 22.5515 41.5576 21.0436 38.9205H23.7026C24.241 40.5046 25.6908 41.6425 27.3913 41.6425H30C32.162 41.6425 33.913 39.8155 33.913 37.5595C33.913 35.3082 32.1577 33.4765 30 33.4765H27.3913C25.653 33.4765 24.2246 34.6481 23.7004 36.1985H19.8965ZM27.2816 46.8165C28.1763 47.0131 29.0884 47.1137 30 47.1137C30.7136 47.1137 31.4273 47.0514 32.133 46.9305L29.8282 49.4738L27.2816 46.8165ZM28.035 51.4524L23.8979 56.0175C22.7589 53.7427 21.7803 51.3753 20.9776 48.9516L22.5312 45.7094L28.035 51.4524ZM37.2477 45.2483L39.0222 48.9515C38.2182 51.3792 37.2393 53.7475 36.1015 56.0195L31.6735 51.3992L37.2477 45.2483ZM26.087 37.5595C26.087 36.8081 26.671 36.1985 27.3913 36.1985H30C30.7192 36.1985 31.3043 36.8091 31.3043 37.5595C31.3043 38.3111 30.7201 38.9205 30 38.9205H27.3913C26.6721 38.9205 26.087 38.31 26.087 37.5595ZM2.66087 67.3654C3.17778 60.6231 7.47809 54.4948 13.2655 52.4811L18.756 50.5719C19.7619 53.4742 21.0081 56.2951 22.4686 58.9747C22.471 58.9793 22.4734 58.9839 22.4759 58.9884C22.4759 58.9886 22.476 58.9886 22.476 58.9887C23.5431 60.947 24.7441 62.8607 26.0463 64.6775L27.6509 67.3654H2.66087ZM30 66.1522L28.231 63.1889C28.2112 63.1557 28.1901 63.1234 28.1677 63.0921C27.1114 61.622 26.1261 60.0844 25.2287 58.5107L29.8804 53.3779L34.7819 58.4922C33.8785 60.0774 32.8898 61.6213 31.8326 63.0918C31.7687 63.1807 31.8593 63.0407 30 66.1522ZM32.3491 67.3654L33.9536 64.6777C35.2615 62.8539 36.4711 60.9249 37.5489 58.9435C37.5554 58.9315 37.5616 58.9193 37.5681 58.9073C37.5689 58.9058 37.5697 58.9044 37.5704 58.903C39.0124 56.249 40.2455 53.4526 41.244 50.5719L46.7344 52.4811C52.5219 54.4948 56.8222 60.6231 57.3391 67.3654H32.3491Z"></path>
        </svg>
      ),
      title: "Support 24/7",
      description:
        "Cửa hàng mở cửa từ T2-T7 hàng tuần. Ngoài ra, hỗ trợ liên tục 24/7 qua điện thoại, zalo, chat trực tuyến, email, fanpage.",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div className="multi-columnn py-12">
      <div className="multi-columnn__wrapper">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {columns.map((column, index) => (
              <div
                key={column.id}
                className="p-6 transiton duration-300 border border-dashed border-green-600 rounded-2xl flex flex-col items-center hover:shadow-2xl hover:border-solid hover:border-gray-300"
                data-aos="fade-up"
                data-aos-delay={`${index}00`}
              >
                <div>{column.icon}</div>
                <h3 className="mt-4 text-base text-gray-950 uppercase text-center font-semibold">
                  {column.title}
                </h3>
                <p className="mt-2 text-center">{column.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MultiColumn;
