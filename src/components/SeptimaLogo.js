import React from 'react';

export default function Septima(props) {
  const { color, width, height, style } = props;
  const defaultStyle = {
    position: 'absolute',
    bottom: 20,
    left: 10,
    zIndex: 3
  };
  const septimaStyle = style ? { ...defaultStyle, ...style } : defaultStyle;
  return (
    <svg
      style={septimaStyle}
      width={width ? width : height ? height * (75 / 19) : 75}
      height={height ? height : width ? width * (19 / 75) : 19}
      viewBox="0 0 75 19"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        opacity="0.7"
      >
        <g
          id="Mobile"
          transform="translate(-145.000000, -618.000000)"
          fill={color ? color : '#1F2022'}
        >
          <g id="Septima_logo" transform="translate(145.000000, 618.000000)">
            <path
              d="M0,0 L0,8.08559519 L6.6908046,8.08559519 C6.75797145,7.8505112 6.86395952,7.63360539 7.01000121,7.44596955 L5.71257175,6.25052279 L5.92146683,6.02406574 L7.21920439,7.2198206 C7.45890995,6.99921754 7.75592301,6.84085165 8.08559519,6.76844702 L8.08559519,0 L0,0 L0,0 Z"
              id="Path"
              fillRule="nonzero"
            ></path>
            <path
              d="M0,8.99173151 L0,17.0770186 L8.08559519,17.0770186 L8.08559519,10.4151758 C7.80830084,10.3544792 7.55226572,10.2361669 7.33597612,10.0676336 L6.14052936,11.3650631 L5.9134561,11.156168 L7.10921096,9.8581223 C6.8886079,9.61841674 6.73055012,9.32140368 6.65845359,8.99173151 L0,8.99173151 Z"
              id="Path"
              fillRule="nonzero"
            ></path>
            <path
              d="M8.93596453,-3.55271368e-15 L8.93596453,6.78600899 C9.19199965,6.85101911 9.42954848,6.96224496 9.63166525,7.12030274 L10.827112,5.82318138 L11.0535691,6.03146025 L9.8578142,7.32919782 C10.0537689,7.54209826 10.2004268,7.7996739 10.2820746,8.08559519 L17.0215597,8.08559519 L17.0215597,-3.55271368e-15 L8.93596453,-3.55271368e-15 Z"
              id="Path"
              fillRule="nonzero"
            ></path>
            <path
              d="M17.7585465,11.8241393 C16.8277618,11.3197716 15.758638,11.0677419 14.5511752,11.0677419 C13.5923529,11.0677419 12.8584472,11.1968378 12.3506904,11.4550297 C11.8426255,11.7135296 11.5890553,12.0795582 11.5890553,12.5537315 C11.5890553,13.0211265 11.8339986,13.3532636 12.3241934,13.551375 C12.7573888,13.7288433 13.4925269,13.8382206 14.5299159,13.880739 C15.4178741,13.9164792 16.0180623,13.9519112 16.3307887,13.9873433 C16.898934,14.0440346 17.3536967,14.1469416 17.6944607,14.2960643 C18.4474689,14.6229636 18.823973,15.1948062 18.823973,16.0119002 C18.823973,16.7935621 18.4813604,17.4023773 17.7958272,17.83927 C17.1102939,18.2761626 16.1280557,18.4946089 14.8494206,18.4946089 C13.1160228,18.4946089 11.7024378,18.1147157 10.6083576,17.3543129 L11.0135154,16.7682975 C12.1356332,17.4790954 13.3646634,17.8340322 14.7002979,17.8340322 C15.7660325,17.8340322 16.584359,17.6762825 17.1565096,17.3613994 C17.7280441,17.0462081 18.0142735,16.6090073 18.0142735,16.0497971 C18.0142735,15.5257107 17.7548492,15.1504391 17.2363088,14.923982 C16.7744596,14.7187842 15.9897166,14.5909207 14.8814635,14.5410077 C14.0643695,14.5058837 13.4962242,14.4704517 13.1764114,14.4347115 C12.6436981,14.3854148 12.2209783,14.2997616 11.90856,14.1789845 C11.1555518,13.8949119 10.7790477,13.3797606 10.7790477,12.6341469 C10.7790477,11.9378299 11.1022496,11.3927925 11.7486536,10.9984183 C12.3950575,10.6040441 13.3150586,10.406857 14.5086567,10.406857 C16.1209693,10.406857 17.3675614,10.7017133 18.2487413,11.291426 L17.7585465,11.8241393 L17.7585465,11.8241393 Z"
              id="Path"
              fillRule="nonzero"
            ></path>
            <polygon
              id="Path"
              fillRule="nonzero"
              points="29.042578 18.3137514 21.5516251 18.3137514 21.5516251 10.5991144 28.7443325 10.5991144 28.7443325 11.2593831 22.2442448 11.2593831 22.2442448 13.8912146 26.7622941 13.8912146 26.7622941 14.5520995 22.2442448 14.5520995 22.2442448 17.6528665 29.042578 17.6528665 29.042578 18.3137514"
            ></polygon>
            <path
              d="M37.1303299,14.4883218 C37.6417839,14.4883218 38.0376986,14.3469016 38.3183821,14.0646776 C38.5990656,13.7821455 38.7395614,13.3834578 38.7395614,12.8683065 C38.7395614,11.7961017 38.1178059,11.2596912 36.8746029,11.2596912 L32.0583081,11.2596912 L32.0583081,14.4883218 L37.1303299,14.4883218 Z M37.183632,10.5991144 C37.9009001,10.5991144 38.467813,10.8049285 38.8831383,11.2171727 C39.2987717,11.6291089 39.5067425,12.1901678 39.5067425,12.9006575 C39.5067425,13.58958 39.2827503,14.136466 38.835382,14.5413158 C38.3877057,14.9461655 37.7767338,15.1492066 37.0024664,15.1492066 L32.0583081,15.1492066 L32.0583081,18.3137514 L31.3656884,18.3137514 L31.3656884,10.5991144 L37.183632,10.5991144 L37.183632,10.5991144 Z"
              id="Shape"
              fillRule="nonzero"
            ></path>
            <polygon
              id="Path"
              fillRule="nonzero"
              points="48.4041939 11.2593831 44.7171033 11.2593831 44.7171033 18.3137514 44.0247918 18.3137514 44.0247918 11.2593831 40.3377012 11.2593831 40.3377012 10.5988063 48.4041939 10.5988063"
            ></polygon>
            <rect
              id="Rectangle"
              x="50.1194135"
              y="10.5991144"
              width="1"
              height="7.71463697"
            ></rect>
            <polygon
              id="Path"
              fillRule="nonzero"
              points="64.0463683 18.3137514 63.3537486 18.3137514 63.3537486 11.2701668 63.310922 11.2701668 59.0381242 16.7682975 54.7548508 11.2701668 54.7224998 11.2701668 54.7224998 18.3137514 54.0298801 18.3137514 54.0298801 10.5991144 55.1097875 10.5991144 59.037508 15.7447733 62.9827904 10.5991144 64.0463683 10.5991144 64.0463683 18.3137514"
            ></polygon>
            <path
              d="M72.8569341,15.6495689 L70.5393696,11.26801 L70.4367707,11.2683181 L68.1065738,15.6495689 L72.8569341,15.6495689 L72.8569341,15.6495689 Z M75.0537216,18.3134433 L74.2588111,18.3134433 L73.2047845,16.3104538 L67.7568748,16.3104538 L66.6855943,18.3134433 L65.8897595,18.3134433 L69.9709162,10.5988063 L70.9938242,10.5988063 L75.0537216,18.3134433 Z"
              id="Shape"
              fillRule="nonzero"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
}
