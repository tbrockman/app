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
                d="M13.94,5.76l-2.4-3.7A.24.24,0,0,0,11.43,2L7.1.05a.23.23,0,0,0-.2,0L2.57,2a.24.24,0,0,0-.11.09L.06,5.76a.5.5,0,0,0,0,.49A.48.48,0,0,0,.5,6.5h.75a.25.25,0,0,1,.25.25V13a1,1,0,0,0,1,1h.75a.25.25,0,0,0,.25-.25V9.25A1.76,1.76,0,0,1,5.25,7.5h3.5A1.76,1.76,0,0,1,10.5,9.25v4.5a.25.25,0,0,0,.25.25h.75a1,1,0,0,0,1-1V6.75a.25.25,0,0,1,.25-.25h.75a.48.48,0,0,0,.43-.25A.5.5,0,0,0,13.94,5.76ZM7,5.25A1.25,1.25,0,1,1,8.25,4,1.25,1.25,0,0,1,7,5.25Z"
            />
            <rect x="5" y="9" width="4" height="5" rx="0.25" />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'NatureEcologyBarn',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
