<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <circle cx="7" cy="7" r="2" />
            <path
                d="M13.36,5.47,7.71.26a1,1,0,0,0-1.35,0L.65,5.46A2,2,0,0,0,0,6.94V12a2,2,0,0,0,2,2H12a2,2,0,0,0,2-2V6.94A2,2,0,0,0,13.36,5.47ZM10.87,12a.24.24,0,0,1-.2-.11,4.51,4.51,0,0,0-7.34,0,.24.24,0,0,1-.2.11H2.25A.25.25,0,0,1,2,11.75V7.05a.23.23,0,0,1,.08-.18L6.86,2.51a.25.25,0,0,1,.34,0l4.72,4.35a.27.27,0,0,1,.08.19v4.7a.24.24,0,0,1-.25.25Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceUserHome',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
