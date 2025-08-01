import { SoundOutlined } from "@ant-design/icons";
import Marquee from "react-fast-marquee";

function Notify() {
  return (
    <div className="bg-[#02A9DD] flex h-[20px]">
      <div className="flex px-[6px] w-[29%] items-center">
        <SoundOutlined className="text-white text-[0.9rem]" />
        <span className=" ml-1 uppercase font-[900] text-white text-[0.75rem]">
          Tin tức:
        </span>
      </div>
      <Marquee
        speed={30}
        loop={0}
        delay={0.1}
        direction="left"
        className="flex items-center text-[0.75rem] text-white"
      >
        Hi88-CƯỢC GIẢI TRÍ, KIẾM TIỀN TỶ. 🏆 Link dễ nhớ: Hi88.com - Hi88.win 🏆
        Phát thưởng 1000 tỷ tiền thưởng Lễ Quốc Khánh 02/09. Hãy kêu gọi bạn bè
        cùng tới tham gia nạp tiền, đặt cược và nhận thưởng nhé! 🏆 Thưởng nạp
        đầu 100% 1 vòng cược, sự kiện mừng tân thủ tặng thưởng 50% hoàn trả liên
        tiếp trong 3 ngày ❤️❤️ 🏆 Đăng ký tài khoản tặng ngay 58k trải nghiệm.
        🎉🎉🎉 🏆Các khuyến mãi lớn sẽ được Hi88 phát đều đặn hàng tháng vào các
        ngày 03-13-23 hàng tháng: Khuyến mãi nghìn tỷ ngày 03-Siêu bão Free ngày
        hội viên 13-Đại tiệc bí ẩn ngày 23! 💥💥💥 🏆Hi88 tặng không giới hạn
        0.6% mỗi lần nạp, tặng 5% tiền nạp chủ nhật vàng.🧧🧧
      </Marquee>
    </div>
  );
}

export default Notify;
