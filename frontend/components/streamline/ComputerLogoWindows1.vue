<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M14,1.53A1.46,1.46,0,0,0,12.37.08L1.29,1.35h0A1.47,1.47,0,0,0,0,2.81v8a1.45,1.45,0,0,0,1.24,1.44l11.08,1.71h.22a1.45,1.45,0,0,0,1-.35A1.47,1.47,0,0,0,14,12.47ZM12,5.78a.25.25,0,0,1-.25.25H7.31a.25.25,0,0,1-.25-.25V2.92a.24.24,0,0,1,.22-.24l4.44-.52a.31.31,0,0,1,.2.07.23.23,0,0,1,.08.18ZM5.28,2.91A.22.22,0,0,1,5.47,3a.23.23,0,0,1,.09.19V5.78A.25.25,0,0,1,5.31,6H2.25A.25.25,0,0,1,2,5.78V3.51a.25.25,0,0,1,.22-.25ZM2,7.78a.25.25,0,0,1,.25-.25H5.31a.25.25,0,0,1,.25.25v2.78a.25.25,0,0,1-.09.19.24.24,0,0,1-.2.06l-3.06-.47A.26.26,0,0,1,2,10.09Zm5.27,3.34a.26.26,0,0,1-.21-.25V7.78a.25.25,0,0,1,.25-.25h4.44a.25.25,0,0,1,.25.25v3.77a.23.23,0,0,1-.09.19.24.24,0,0,1-.2.06Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ComputerLogoWindows1',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
