import "./Footer.scss";
import {
  PhoneOutlined,
  ClockCircleOutlined,
  HomeOutlined,
} from "@ant-design/icons";
function Footer() {
  return (
    <div className="footer-page">
      <div className="container footer-content">
        <div className="content">
          <div className="title-content">Our Awards</div>
          <div className="sub-content">
            London is a megalopolis of people, ideas and frenetic energy. The
            capital and largest city of the United Kingdom.
          </div>
          <img
            className="img-logo"
            src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/awards.png"
          />
          <div className="icon-footer"></div>
        </div>
        <div className="content">
          <div className="title-content">Contact Info</div>
          <div className="sub-content">
            <div className="list">
              <PhoneOutlined />
              1-567-124-44227
            </div>
            <div className="list">
              <HomeOutlined />
              184 Main Street East Perl Habour 8007
            </div>
            <div className="list">
              <ClockCircleOutlined />
              Mon - Sat 8.00 - 18.00 Sunday CLOSED
            </div>
          </div>
          <div className="icon-social">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
              fill="#fff"
              className="icon-fa"
            >
              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
              fill="#fff"
              className="icon-fa"
            >
              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
              fill="#fff"
              className="icon-fa"
            >
              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
              fill="#fff"
              className="icon-fa"
            >
              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
              fill="#fff"
              className="icon-fa"
            >
              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
            </svg>
          </div>
        </div>
        <div className="content">
          <div className="title-content">Recent Trips</div>
          <div className="grid-img">
            <div className="grid-img-item">
              <img src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg" />
            </div>
            <div className="grid-img-item">
              <img src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg" />
            </div>
            <div className="grid-img-item">
              <img src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg" />
            </div>
            <div className="grid-img-item">
              <img src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg" />
            </div>
            <div className="grid-img-item">
              <img src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg" />
            </div>
            <div className="grid-img-item">
              <img src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
