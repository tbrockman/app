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
                d="M9.53,4.72a.75.75,0,0,0-1.28.53V6A.25.25,0,0,1,8,6.25H6A.25.25,0,0,1,5.75,6V5.25a.75.75,0,0,0-1.28-.53L2.72,6.47a.75.75,0,0,0,0,1.06L4.47,9.28a.74.74,0,0,0,.82.16.74.74,0,0,0,.46-.69V8A.25.25,0,0,1,6,7.75H8A.25.25,0,0,1,8.25,8v.75a.74.74,0,0,0,.46.69.74.74,0,0,0,.82-.16l1.75-1.75a.75.75,0,0,0,0-1.06Z"
            />
            <path
                d="M.75,0A.76.76,0,0,0,0,.75v12.5A.76.76,0,0,0,.75,14a.76.76,0,0,0,.75-.75V.75A.76.76,0,0,0,.75,0Z"
            />
            <path
                d="M13.25,0a.76.76,0,0,0-.75.75v12.5a.75.75,0,0,0,1.5,0V.75A.76.76,0,0,0,13.25,0Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsHorizontalExpand',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
