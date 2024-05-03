import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function DinningIcon(props: IconProps) {
  return (
    <svg
      width={42}
      height={42}
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.267 42 0 38.733l23.917-23.916q-1.05-2.45-.292-5.542.759-3.091 3.325-5.542Q30.042.643 33.833.117q3.792-.525 6.184 1.866 2.391 2.392 1.866 6.184-.525 3.791-3.616 6.883-2.45 2.567-5.542 3.325-3.091.759-5.542-.292L24.267 21 42 38.733 38.733 42 21 24.383zm6.883-19.95-7-7Q0 11.9 0 7.525T3.15 0l14.467 14.583z"
        fill="currentColor"
      />
    </svg>
  );
}

export function StockpotIcon(props: IconProps) {
  return (
    <svg
      width={32}
      height={30.222}
      viewBox="0 0 32 30.222"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.333 30.222a5.16 5.16 0 0 1-3.778-1.556A5.16 5.16 0 0 1 0 24.889v-16h32v16q0 2.222-1.556 3.778a5.16 5.16 0 0 1-3.777 1.555zM0 7.111V3.556h10.667V1.778q0-.754.51-1.266A1.72 1.72 0 0 1 12.444 0h7.111q.754 0 1.268.512.51.51.51 1.266v1.778H32v3.556z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ListAltIcon(props: IconProps) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.889 24.889q.754 0 1.268-.51a1.72 1.72 0 0 0 .51-1.268 1.72 1.72 0 0 0-.51-1.268 1.72 1.72 0 0 0-1.268-.51 1.72 1.72 0 0 0-1.268.51 1.72 1.72 0 0 0-.51 1.268q0 .754.51 1.268.514.51 1.268.51m0-7.111q.754 0 1.268-.51a1.72 1.72 0 0 0 .51-1.268 1.72 1.72 0 0 0-.51-1.268 1.72 1.72 0 0 0-1.268-.51 1.72 1.72 0 0 0-1.268.51A1.72 1.72 0 0 0 7.111 16q0 .754.51 1.268.514.51 1.268.51m0-7.111q.754 0 1.268-.51a1.72 1.72 0 0 0 .51-1.268 1.72 1.72 0 0 0-.51-1.268 1.72 1.72 0 0 0-1.268-.51 1.72 1.72 0 0 0-1.268.51 1.72 1.72 0 0 0-.51 1.268q0 .754.51 1.268.514.51 1.268.51m5.333 14.222h10.667v-3.556H14.222zm0-7.111h10.667v-3.556H14.222zm0-7.111h10.667V7.111H14.222zM3.556 32q-1.465 0-2.51-1.044A3.43 3.43 0 0 1 0 28.444V3.556q0-1.465 1.045-2.511A3.43 3.43 0 0 1 3.556 0h24.889q1.465 0 2.512 1.045Q32 2.089 32 3.556v24.889q0 1.465-1.044 2.512A3.43 3.43 0 0 1 28.444 32z"
        fill="currentColor"
      />
    </svg>
  );
}

export function GridViewIcon(props: IconProps) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 14.222V0h14.222v14.222zM0 32V17.778h14.222V32zm17.778-17.778V0H32v14.222zm0 17.778V17.778H32V32z"
        fill="currentColor"
      />
    </svg>
  );
}

export function BarChartIcon(props: IconProps) {
  return (
    <svg
      width={32}
      height={28.8}
      viewBox="0 0 32 28.8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 28.8v-3.2h32v3.2zM1.6 24V12.8h4.8V24zm8 0V4.8h4.8V24zm8 0V9.6h4.8V24zm8 0V0h4.8v24z"
        fill="currentColor"
      />
    </svg>
  );
}

export function NotificationIcon(props: IconProps) {
  return (
    <svg
      width={25.6}
      height={32}
      viewBox="0 0 25.6 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 27.2V24h3.2V12.8q0-3.32 2-5.899 2-2.581 5.2-3.381V2.4q0-1 .701-1.699A2.32 2.32 0 0 1 12.8 0q.998 0 1.701.701.699.697.699 1.699v1.12q3.2.8 5.2 3.381t2 5.899V24h3.2v3.2zM12.8 32q-1.318 0-2.259-.939A3.1 3.1 0 0 1 9.6 28.8H16q0 1.318-.941 2.261A3.1 3.1 0 0 1 12.8 32"
        fill="currentColor"
      />
    </svg>
  );
}

export function SettingsIcon(props: IconProps) {
  return (
    <svg
      width={32}
      height={29.091}
      viewBox="0 0 32 29.091"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m12 29.091 -0.582 -4.655a5.818 5.818 0 0 1 -0.89 -0.436 11.636 11.636 0 0 1 -0.819 -0.545L5.382 25.273l-4 -6.909 3.745 -2.836a3.491 3.491 0 0 1 -0.036 -0.492v-0.982q0 -0.236 0.036 -0.49L1.382 10.727l4 -6.909 4.327 1.818q0.401 -0.291 0.836 -0.545 0.436 -0.255 0.873 -0.436l0.582 -4.655h8l0.582 4.655q0.473 0.182 0.892 0.436 0.417 0.255 0.817 0.545l4.327 -1.818 4 6.909 -3.745 2.836q0.036 0.256 0.036 0.492v0.982q0 0.236 -0.073 0.49l3.745 2.836 -4 6.909 -4.291 -1.818a10.182 10.182 0 0 1 -0.836 0.545q-0.436 0.255 -0.873 0.436l-0.582 4.655zm4.073 -9.455q2.109 0 3.6 -1.491A4.902 4.902 0 0 0 21.164 14.545q0 -2.109 -1.491 -3.6A4.902 4.902 0 0 0 16.073 9.455q-2.144 0 -3.617 1.491A4.945 4.945 0 0 0 10.982 14.545q0 2.109 1.473 3.6T16.073 19.636"
        fill="currentColor"
      />
    </svg>
  );
}

export function LogOutIcon(props: IconProps) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.111 28a3 3 0 0 1-2.197-.914A3 3 0 0 1 0 24.89V3.11Q0 1.828.914.914A3 3 0 0 1 3.11 0H14v3.111H3.111V24.89H14V28zm17.111-6.222-2.139-2.256 3.967-3.966H9.333v-3.112H22.05l-3.967-3.966 2.14-2.256L28 14z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m21.745 23.75-4.906-4.65a9.82 9.82 0 0 1-6.122 2.094q-4.39 0-7.431-3.04Q.245 15.112.245 10.722t3.04-7.431Q6.328.251 10.718.25t7.431 3.041q3.04 3.04 3.041 7.431a9.8 9.8 0 0 1-.564 3.343 9.6 9.6 0 0 1-1.53 2.78L24 21.494zm-11.028-5.778q3.021 0 5.135-2.114 2.115-2.115 2.115-5.136t-2.115-5.135-5.135-2.115T5.58 5.587t-2.114 5.135 2.114 5.136 5.136 2.114"
        fill="currentColor"
      />
    </svg>
  );
}

export function RemoveIcon(props: IconProps) {
  return (
    <svg
      width={13}
      height={3}
      viewBox="0 0 13 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5.643 2.684H.5V.718h12v1.966H7.357v.034z" fill="currentColor" />
    </svg>
  );
}

export function AddIcon(props: IconProps) {
  return (
    <svg
      width={13}
      height={14}
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.571 7.646H0V5.79h5.571V.218H7.43v5.571H13v1.857H7.429v5.572H5.57z"
        fill="currentColor"
      />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg
      width={33}
      height={34}
      viewBox="0 0 33 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.333 11.333V0H33v11.333zM0 18.89V0h14.667v18.889zM18.333 34V15.111H33V34zM0 34V22.667h14.667V34zm3.667-18.889H11V3.778H3.667zM22 30.222h7.333V18.89H22zm0-22.666h7.333V3.778H22zM3.667 30.222H11v-3.778H3.667z"
        fill="currentColor"
      />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 30 30"
      width={30}
      height={30}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4.286}
        d="M2.143 2.143 15 15m0 0 12.857 12.857M15 15 27.857 2.143M15 15 2.143 27.857"
      />
    </svg>
  );
}
