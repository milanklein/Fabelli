import type { SVGProps } from "react";

const base = {
  fill: "none",
  stroke: "#9D86B8",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function MapIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" />
      <path d="M9 4v14M15 6v14" />
    </svg>
  );
}

export function ArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
       <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"{...base} {...props}>
<path d="M19.65 36.025V32.75" stroke="#9881B3" strokeWidth="2.45625" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.65 29.475V26.2" stroke="#9881B3" strokeWidth="2.45625" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.65 22.9248V18.0123C19.65 11.6752 24.7754 6.5498 31.1125 6.5498H36.025" stroke="#9881B3" strokeWidth="2.45625" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.27499 6.5498H8.18749C14.5246 6.5498 19.65 11.6752 19.65 18.0123V19.6498V22.9248" stroke="#9881B3" strokeWidth="2.45625" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.54999 3.2749L3.27499 6.5499L6.54999 9.8249" stroke="#9881B3" strokeWidth="2.45625" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M32.75 3.2749L36.025 6.5499L32.75 9.8249" stroke="#9881B3" strokeWidth="2.45625" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
}

export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx={11} cy={11} r={7} />
      <path d="m21 21-3.5-3.5M8 11h6" />
    </svg>
  );
}

export function RankingIcon(props: SVGProps<SVGSVGElement>) {
  return (
  
     <svg width="40" height="40" viewBox="0 0 40 40"  xmlns="http://www.w3.org/2000/svg" {...base} {...props}>
<path d="M14.1971 22.9248H6.54999C4.74874 22.9248 3.27499 24.3986 3.27499 26.1998V36.0248H14.1971V22.9248Z" stroke="#9D86B8" strokeWidth="2.45625" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.8279 16.375H17.4558C15.6545 16.375 14.1808 17.8487 14.1808 19.65V36.025H25.1029V19.65C25.1029 17.8487 23.6455 16.375 21.8279 16.375Z" stroke="#9D86B8" strokeWidth="2.45625" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M32.75 27.8374H25.1029V36.0249H36.025V31.1124C36.025 29.3112 34.5513 27.8374 32.75 27.8374Z" stroke="#9D86B8" strokeWidth="2.45625" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.5015 3.38918L21.3694 5.12492C21.484 5.37055 21.7951 5.59979 22.0571 5.63254L23.6291 5.89455C24.628 6.0583 24.8736 6.79514 24.1531 7.49927L22.925 8.72739C22.7121 8.94027 22.5975 9.33328 22.663 9.61166L23.0069 11.1182C23.2852 12.3136 22.6466 12.7721 21.5986 12.1498L20.1249 11.2819C19.8629 11.1182 19.4207 11.1182 19.1587 11.2819L17.685 12.1498C16.637 12.7721 15.9984 12.3136 16.2767 11.1182L16.6206 9.61166C16.6861 9.33328 16.5715 8.92389 16.3586 8.72739L15.1469 7.51566C14.4264 6.79516 14.6556 6.07464 15.6709 5.91089L17.2429 5.64893C17.5049 5.59981 17.816 5.37056 17.9306 5.14131L18.7985 3.40552C19.2734 2.45577 20.0266 2.4558 20.5015 3.38918Z" stroke="#9D86B8" strokeWidth="2.45625" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
}

export function DocumentIcon(props: SVGProps<SVGSVGElement>) {
  return (
    
      <svg width="40" height="40" viewBox="0 0 40 40"  xmlns="http://www.w3.org/2000/svg" {...base} {...props}>
<path d="M36.025 16.3751V24.5626C36.025 32.7501 32.75 36.0251 24.5625 36.0251H14.7375C6.54999 36.0251 3.27499 32.7501 3.27499 24.5626V14.7376C3.27499 6.55015 6.54999 3.27515 14.7375 3.27515H22.925" stroke="#9881B3" strokeWidth="2.45625" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M36.025 16.3751H29.475C24.5625 16.3751 22.925 14.7376 22.925 9.82515V3.27515L36.025 16.3751Z" stroke="#9881B3" strokeWidth="2.45625" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.4625 21.2874H21.2875" stroke="#9881B3" strokeWidth="2.45625" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.4625 27.8376H18.0125" stroke="#9881B3" strokeWidth="2.45625" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
}

export function BoxIcon(props: SVGProps<SVGSVGElement>) {
  return (
      <svg width="33" height="33" viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg" {...base} {...props}>
<path d="M25.3674 25.3677L28.3838 23.8595V20.0823M19.3211 13.2887L16.3047 14.7968L19.3211 13.2887ZM16.3047 14.7968L13.2883 13.2887L16.3047 14.7968ZM16.3047 14.7968V18.5741V14.7968ZM28.3838 8.75052L25.3674 10.2587L28.3838 8.75052ZM28.3838 8.75052L25.3674 7.24233L28.3838 8.75052ZM28.3838 8.75052V12.5278V8.75052ZM19.3211 4.22596L16.3047 2.71777L13.2883 4.22596H19.3211ZM4.22563 8.75052L7.242 7.24233L4.22563 8.75052ZM4.22563 8.75052L7.242 10.2587L4.22563 8.75052ZM4.22563 8.75052V12.5278V8.75052ZM16.3047 29.8923L13.2883 28.3841L16.3047 29.8923ZM16.3047 29.8923L19.3211 28.3841L16.3047 29.8923ZM16.3047 29.8923V26.115V29.8923ZM7.242 25.3677L4.22563 23.8595V20.0823L7.242 25.3677Z" stroke="#9D86B8" strokeWidth="2.03809" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
}

export function TaskIcon(props: SVGProps<SVGSVGElement>) {
  return (
    
      <svg width="33" height="33" viewBox="0 0 33 33"  xmlns="http://www.w3.org/2000/svg" {...base} {...props}>
<path d="M14.946 26.4951H28.5332" stroke="#9D86B8" strokeWidth="2.03809" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.946 16.9844H28.5332" stroke="#9D86B8" strokeWidth="2.03809" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.946 7.47314H28.5332" stroke="#9D86B8" strokeWidth="2.03809" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.07617 7.47331L5.4349 8.83203L9.51107 4.75586" stroke="#9D86B8" strokeWidth="2.03809" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.07617 16.9841L5.4349 18.3428L9.51107 14.2666" stroke="#9D86B8" strokeWidth="2.03809" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.07617 26.4953L5.4349 27.854L9.51107 23.7778" stroke="#9D86B8" strokeWidth="2.03809" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
}

export function CallIcon(props: SVGProps<SVGSVGElement>) {
  return (
    
     <svg width="33" height="33" viewBox="0 0 33 33"  xmlns="http://www.w3.org/2000/svg" {...base} {...props}>
<path d="M29.8512 24.9053C29.8512 25.3944 29.7425 25.8971 29.5115 26.3863C29.2805 26.8754 28.9816 27.3374 28.5876 27.7722C27.9218 28.5059 27.1881 29.0358 26.3593 29.3755C25.544 29.7152 24.6609 29.8918 23.7098 29.8918C22.3239 29.8918 20.8428 29.5657 19.2803 28.8999C17.7178 28.2341 16.1552 27.3374 14.6063 26.2096C13.0438 25.0683 11.5628 23.8047 10.1497 22.4052C8.75019 20.9921 7.48658 19.5111 6.35884 17.9622C5.24468 16.4132 4.34792 14.8643 3.69574 13.3289C3.04355 11.78 2.71745 10.299 2.71745 8.8859C2.71745 7.96196 2.8805 7.07879 3.20659 6.26356C3.53269 5.43474 4.049 4.67385 4.76913 3.99449C5.63871 3.13849 6.58982 2.71729 7.59528 2.71729C7.97572 2.71729 8.35616 2.79881 8.69584 2.96186C9.04911 3.1249 9.36162 3.36947 9.60619 3.72274L12.7584 8.16577C13.003 8.50545 13.1796 8.81796 13.3019 9.11688C13.4242 9.40221 13.4921 9.68754 13.4921 9.9457C13.4921 10.2718 13.397 10.5979 13.2068 10.9104C13.0302 11.2229 12.772 11.549 12.4459 11.8751L11.4133 12.9485C11.2638 13.0979 11.1959 13.2746 11.1959 13.492C11.1959 13.6007 11.2095 13.6958 11.2367 13.8045C11.2774 13.9132 11.3182 13.9947 11.3454 14.0762C11.5899 14.5246 12.0111 15.1089 12.609 15.8154C13.2204 16.5219 13.8726 17.2421 14.5791 17.9622C15.3128 18.6823 16.0194 19.3481 16.7395 19.9595C17.446 20.5573 18.0303 20.965 18.4923 21.2095C18.5602 21.2367 18.6417 21.2775 18.7368 21.3182C18.8455 21.359 18.9542 21.3726 19.0765 21.3726C19.3075 21.3726 19.4841 21.2911 19.6336 21.1416L20.6662 20.1226C21.0059 19.7829 21.332 19.5247 21.6445 19.3617C21.957 19.1714 22.2695 19.0763 22.6092 19.0763C22.8673 19.0763 23.1391 19.1307 23.438 19.253C23.7369 19.3753 24.0494 19.5519 24.3891 19.7829L28.8865 22.9759C29.2398 23.2204 29.4843 23.5058 29.6338 23.8455C29.7697 24.1851 29.8512 24.5248 29.8512 24.9053Z" stroke="#9D86B8" strokeWidth="2.03809" strokeMiterlimit="10"/>
<path d="M25.1364 12.2282C25.1364 11.413 24.4978 10.1629 23.5467 9.14389C22.6771 8.20637 21.5222 7.47266 20.3809 7.47266" stroke="#9D86B8" strokeWidth="2.03809" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M29.892 12.2284C29.892 6.97009 25.6392 2.71729 20.3809 2.71729" stroke="#9D86B8" strokeWidth="2.03809" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
}

export function PeopleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    
     <svg width="33" height="33" viewBox="0 0 33 33"  xmlns="http://www.w3.org/2000/svg" {...base} {...props}>
<path d="M24.457 9.72831C24.3755 9.71472 24.2804 9.71472 24.1989 9.72831C22.3239 9.66037 20.8293 8.12501 20.8293 6.2228C20.8293 4.27982 22.3918 2.71729 24.3348 2.71729C26.2777 2.71729 27.8403 4.29341 27.8403 6.2228C27.8267 8.12501 26.3321 9.66037 24.457 9.72831Z" stroke="#9D86B8" strokeWidth="2.03809" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M23.0576 19.62C24.919 19.9325 26.9707 19.6064 28.4109 18.6418C30.3267 17.3646 30.3267 15.2721 28.4109 13.9949C26.9571 13.0302 24.8783 12.7041 23.0168 13.0302" stroke="#9D86B8" strokeWidth="2.03809" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.11158 9.72831C8.1931 9.71472 8.28821 9.71472 8.36973 9.72831C10.2448 9.66037 11.7394 8.12501 11.7394 6.2228C11.7394 4.27982 10.1768 2.71729 8.23386 2.71729C6.29088 2.71729 4.72835 4.29341 4.72835 6.2228C4.74194 8.12501 6.23653 9.66037 8.11158 9.72831Z" stroke="#9D86B8" strokeWidth="2.03809" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.51108 19.62C7.64963 19.9325 5.59796 19.6064 4.15771 18.6418C2.24191 17.3646 2.24191 15.2721 4.15771 13.9949C5.61154 13.0302 7.69039 12.7041 9.55184 13.0302" stroke="#9D86B8" strokeWidth="2.03809" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.3047 19.8782C16.2232 19.8646 16.1281 19.8646 16.0465 19.8782C14.1715 19.8103 12.6769 18.2749 12.6769 16.3727C12.6769 14.4297 14.2394 12.8672 16.1824 12.8672C18.1254 12.8672 19.6879 14.4433 19.6879 16.3727C19.6743 18.2749 18.1797 19.8239 16.3047 19.8782Z" stroke="#9D86B8" strokeWidth="2.03809" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.3508 24.1588C10.435 25.436 10.435 27.5284 12.3508 28.8056C14.5248 30.2595 18.0846 30.2595 20.2586 28.8056C22.1744 27.5284 22.1744 25.436 20.2586 24.1588C18.0982 22.7186 14.5248 22.7186 12.3508 24.1588Z" stroke="#9D86B8" strokeWidth="2.03809" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
  );
}

export function WalletIcon(props: SVGProps<SVGSVGElement>) {
  return (
   
      <svg width="33" height="33" viewBox="0 0 33 33"  xmlns="http://www.w3.org/2000/svg" {...base} {...props}>
<path d="M24.5114 18.4109C23.9407 18.9679 23.6146 19.7696 23.6962 20.6256C23.8185 22.093 25.1636 23.1664 26.631 23.1664H29.2126V24.7833C29.2126 27.5958 26.9163 29.8921 24.1038 29.8921H8.50563C5.69307 29.8921 3.39682 27.5958 3.39682 24.7833V15.6391C3.39682 12.8265 5.69307 10.5303 8.50563 10.5303H24.1038C26.9163 10.5303 29.2126 12.8265 29.2126 15.6391V17.5957H26.468C25.7071 17.5957 25.0141 17.8945 24.5114 18.4109Z" stroke="#9D86B8" strokeWidth="2.03809" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.39682 16.8617V10.6524C3.39682 9.03548 4.38869 7.59517 5.89687 7.02451L16.6851 2.94833C18.37 2.30973 20.1771 3.5598 20.1771 5.3669V10.53" stroke="#9D86B8" strokeWidth="2.03809" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M30.6512 18.9815V21.7806C30.6512 22.5279 30.0534 23.1393 29.2925 23.1664H26.6294C25.162 23.1664 23.8168 22.0931 23.6946 20.6256C23.613 19.7696 23.9391 18.968 24.5098 18.4109C25.0125 17.8946 25.7055 17.5957 26.4664 17.5957H29.2925C30.0534 17.6229 30.6512 18.2342 30.6512 18.9815Z" stroke="#9D86B8" strokeWidth="2.03809" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.51108 16.3047H19.0222" stroke="#9D86B8" strokeWidth="2.03809" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
}

export function ArrowCircleUpIcon(props: SVGProps<SVGSVGElement>) {
  return (
    
      <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M22 12C22 6.49 17.51 2 12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12ZM10.21 16.06C10.06 15.91 9.99 15.72 9.99 15.53C9.99 15.34 10.06 15.15 10.21 15L13.21 12L10.21 9C9.92 8.71 9.92 8.23 10.21 7.94C10.5 7.65 10.98 7.65 11.27 7.94L14.8 11.47C15.09 11.76 15.09 12.24 14.8 12.53L11.27 16.06C10.97 16.35 10.5 16.35 10.21 16.06Z" fill="#EBEBEB"/>
</g>
</svg>

  );
}
