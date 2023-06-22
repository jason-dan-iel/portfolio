import './preloader.css'
export default function Preloader() {
  return (
    // <div className="bg-red-100 text-center font-Cedarville text-[170px]">
    //     I am Jason Daniel
    // </div>
    <div id="PL">

      <svg viewBox="0 0 600 300">
        <symbol id="s-text">
          <text textAnchor="middle" x="50%" y="50%" dy=".35em">
            Jason Daniel
          </text>
        </symbol>
        <use className="text" xlinkHref="#s-text"></use>
        <use className="text" xlinkHref="#s-text"></use>
        <use className="text" xlinkHref="#s-text"></use>
        <use className="text" xlinkHref="#s-text"></use>
        <use className="text" xlinkHref="#s-text"></use>
      </svg>
    </div>
  );
}
