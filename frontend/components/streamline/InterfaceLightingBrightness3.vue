<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <circle cx="7" cy="7" r="1.5" />
            <path
                d="M7,13.5a.76.76,0,0,1-.75-.75V11.5a.75.75,0,0,1,1.5,0v1.25A.76.76,0,0,1,7,13.5Z"
            />
            <path
                d="M11.14,11.89a.74.74,0,0,1-.53-.22l-1-1a.75.75,0,1,1,1.06-1.06l1,1a.75.75,0,0,1,0,1.06A.74.74,0,0,1,11.14,11.89Z"
            />
            <path
                d="M12.75,7.75H11.5a.75.75,0,0,1,0-1.5h1.25a.75.75,0,0,1,0,1.5Z"
            />
            <path
                d="M10.18,4.57a.79.79,0,0,1-.53-.22.75.75,0,0,1,0-1.06l1-1a.75.75,0,1,1,1.06,1.06l-1,1A.77.77,0,0,1,10.18,4.57Z"
            />
            <path
                d="M7,3.25a.76.76,0,0,1-.75-.75V1.25a.75.75,0,0,1,1.5,0V2.5A.76.76,0,0,1,7,3.25Z"
            />
            <path
                d="M3.82,4.57a.77.77,0,0,1-.53-.22l-1-1A.75.75,0,0,1,3.39,2.33l1,1a.75.75,0,0,1,0,1.06A.79.79,0,0,1,3.82,4.57Z"
            />
            <path
                d="M2.5,7.75H1.25a.75.75,0,0,1,0-1.5H2.5a.75.75,0,0,1,0,1.5Z"
            />
            <path
                d="M2.86,11.89a.74.74,0,0,1-.53-.22.75.75,0,0,1,0-1.06l1-1a.75.75,0,1,1,1.06,1.06l-1,1A.74.74,0,0,1,2.86,11.89Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceLightingBrightness3',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
