<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <path
                d="M7.25,3a.75.75,0,0,0,0-1.5H.75A.75.75,0,0,0,.75,3,.25.25,0,0,1,1,3.25v7.5A.25.25,0,0,1,.75,11a.75.75,0,0,0,0,1.5h6.5a.75.75,0,0,0,0-1.5A.25.25,0,0,1,7,10.75V3.25A.25.25,0,0,1,7.25,3Z"
            />
            <path
                d="M14,3.75A.76.76,0,0,0,13.25,3h-4a.75.75,0,0,0,0,1.5h3a.25.25,0,0,1,.25.25V6a.24.24,0,0,1-.11.21l-1.06.71A.74.74,0,0,0,11,7.5V9.25a.25.25,0,0,1-.25.25H9.25a.75.75,0,0,0,0,1.5h2.5a.76.76,0,0,0,.75-.75V7.9l1.17-.78A.74.74,0,0,0,14,6.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'ImageAccessoriesFilmRoll',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
