<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :height="size"
        :width="size"
        viewBox="0 0 1024 1024"
        fill="none"
        class="linear-round-icon"
    >
        <path fill="url(#linear-icon-a)" d="M0 0h1024v1024H0z" />
        <g filter="url(#linear-icon-b)">
            <path
                fill="url(#linear-icon-c)"
                d="M262.274 570.997c-1.139-4.857 4.646-7.915 8.174-4.388l186.943 186.943c3.527 3.528.469 9.313-4.388 8.174-94.339-22.131-168.598-96.39-190.729-190.729Z"
            />
            <path
                fill="url(#linear-icon-d)"
                d="M256.01 496.072c-.091 1.451.455 2.867 1.482 3.894l266.542 266.542c1.027 1.027 2.443 1.573 3.894 1.482 12.13-.755 24.032-2.355 35.647-4.74 3.914-.804 5.274-5.613 2.449-8.439L269.189 457.976c-2.826-2.825-7.635-1.465-8.439 2.449-2.385 11.615-3.985 23.517-4.74 35.647Z"
            />
            <path
                fill="url(#linear-icon-e)"
                d="M277.56 408.092c-.852 1.914-.418 4.15 1.063 5.631l331.654 331.654c1.481 1.481 3.717 1.915 5.631 1.063 9.145-4.073 18.008-8.666 26.55-13.742 2.827-1.68 3.263-5.564.938-7.889L299.191 380.604c-2.325-2.325-6.209-1.889-7.889.938-5.076 8.542-9.669 17.405-13.742 26.55Z"
            />
            <path
                fill="url(#linear-icon-f)"
                d="M320.813 348.539c-1.895-1.895-2.013-4.935-.227-6.933C367.511 289.072 435.77 256 511.754 256 653.275 256 768 370.725 768 512.246c0 75.984-33.072 144.243-85.606 191.168-1.998 1.786-5.038 1.668-6.933-.227L320.813 348.539Z"
            />
        </g>
        <defs>
            <linearGradient
                id="linear-icon-a"
                x1="512"
                x2="512"
                y1="0"
                y2="1024"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#5C6BF1" />
                <stop offset="1" stop-color="#283188" />
            </linearGradient>
            <linearGradient
                id="linear-icon-c"
                x1="274.286"
                x2="541.257"
                y1="303.543"
                y2="694.857"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#fff" />
                <stop offset="1" stop-color="#fff" stop-opacity=".65" />
            </linearGradient>
            <linearGradient
                id="linear-icon-d"
                x1="274.286"
                x2="541.257"
                y1="303.543"
                y2="694.857"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#fff" />
                <stop offset="1" stop-color="#fff" stop-opacity=".65" />
            </linearGradient>
            <linearGradient
                id="linear-icon-e"
                x1="274.286"
                x2="541.257"
                y1="303.543"
                y2="694.857"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#fff" />
                <stop offset="1" stop-color="#fff" stop-opacity=".65" />
            </linearGradient>
            <linearGradient
                id="linear-icon-f"
                x1="274.286"
                x2="541.257"
                y1="303.543"
                y2="694.857"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#fff" />
                <stop offset="1" stop-color="#fff" stop-opacity=".65" />
            </linearGradient>
            <filter
                id="linear-icon-b"
                width="797.149"
                height="797.149"
                x="113.426"
                y="135.703"
                color-interpolation-filters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="22.2772" />
                <feGaussianBlur stdDeviation="71.2871" />
                <feColorMatrix
                    values="0 0 0 0 0.118924 0 0 0 0 0.158031 0 0 0 0 0.570833 0 0 0 0.7 0"
                />
                <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_9417_5600"
                />
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="7.79703" />
                <feGaussianBlur stdDeviation="30" />
                <feColorMatrix
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0"
                />
                <feBlend
                    in2="effect1_dropShadow_9417_5600"
                    result="effect2_dropShadow_9417_5600"
                />
                <feBlend
                    in="SourceGraphic"
                    in2="effect2_dropShadow_9417_5600"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class LinearRoundIcon extends Vue {
    @Prop({ required: false, default: '22' })
    size!: string;
}
</script>
<style scoped lang="scss">
.linear-round-icon {
    border-radius: 50%;
}
</style>
