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
                d="M12.83,5.49a.75.75,0,0,1-.7-.48,5.33,5.33,0,0,0-.37-.76,5.48,5.48,0,0,0-.76-1,.75.75,0,0,1,0-1.06.75.75,0,0,1,1.06,0,6.88,6.88,0,0,1,1,1.3,7.26,7.26,0,0,1,.47,1,.75.75,0,0,1-.43,1A.86.86,0,0,1,12.83,5.49Z"
            />
            <path
                d="M1.17,5.49a.86.86,0,0,1-.27,0,.75.75,0,0,1-.43-1,7.22,7.22,0,0,1,.47-1,6.88,6.88,0,0,1,1-1.3A.75.75,0,0,1,3,2.16.75.75,0,0,1,3,3.22a5.48,5.48,0,0,0-.76,1A4.84,4.84,0,0,0,1.87,5,.74.74,0,0,1,1.17,5.49Z"
            />
            <path
                d="M8.44,1.67l-.17,0a5.45,5.45,0,0,0-2.54,0,.75.75,0,0,1-.9-.56.74.74,0,0,1,.55-.9,7.09,7.09,0,0,1,3.24,0,.74.74,0,0,1,.55.9A.75.75,0,0,1,8.44,1.67Z"
            />
            <path
                d="M7,14A7,7,0,0,1,0,7.56a.76.76,0,0,1,.69-.81.75.75,0,0,1,.81.69,5.5,5.5,0,0,0,11,0,.75.75,0,1,1,1.5.12A7,7,0,0,1,7,14Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceEditFlipBottomAlternate1',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
