<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12.25,2H10.62a.25.25,0,0,1-.23-.14L9.67.41A.76.76,0,0,0,9,0H5a.76.76,0,0,0-.67.41L3.61,1.86A.25.25,0,0,1,3.38,2H1.75A1.76,1.76,0,0,0,0,3.75v4.5A1.76,1.76,0,0,0,1.75,10H4a.25.25,0,0,1,.21.12l2.2,3.53a.76.76,0,0,0,1.28,0l2.2-3.53a.25.25,0,0,1,.21-.12h2.2A1.76,1.76,0,0,0,14,8.25V3.75A1.76,1.76,0,0,0,12.25,2ZM7,8.25a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,7,8.25Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ImageCameraSettingPin',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
