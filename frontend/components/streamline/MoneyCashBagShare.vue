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
                d="M11.79,1.77a.3.3,0,0,1-.12-.17.29.29,0,0,1,.05-.2L12,1l0-.05a.68.68,0,0,0,0-.66.66.66,0,0,0-.55-.3H9a.67.67,0,0,0-.55.3.68.68,0,0,0,0,.66l0,.05.3.38a.24.24,0,0,1,.05.2.26.26,0,0,1-.12.17A4,4,0,0,0,6.47,5.44C6.47,7.06,7.84,8,10.24,8S14,7.06,14,5.44A4,4,0,0,0,11.79,1.77Z"
            />
            <path
                d="M7.44,9.74h-.8a.26.26,0,0,1-.24-.19A3.57,3.57,0,0,0,3,7H.75a.75.75,0,0,0,0,1.5H3a2.06,2.06,0,0,1,1.69.85.23.23,0,0,1,0,.26.26.26,0,0,1-.22.14H3.25a.75.75,0,0,0,0,1.5H7.44a2.09,2.09,0,0,1,1.69.85.27.27,0,0,1,0,.26.27.27,0,0,1-.23.14H.75a.75.75,0,0,0,0,1.5h9.5a.76.76,0,0,0,.75-.75A3.54,3.54,0,0,0,7.44,9.74Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'MoneyCashBagShare',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
