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
                d="M4,5.88A.22.22,0,0,1,3.8,6h0a.25.25,0,0,0-.25.25V9.88a.25.25,0,0,0,.25.24h.13a.2.2,0,0,1,.11,0l.42.21A1.3,1.3,0,0,0,5,10.5H9.25A.75.75,0,0,0,10,9.86l.51-3.37a.74.74,0,0,0-.73-.87H7.16a.25.25,0,0,1-.25-.24V3.72A.72.72,0,0,0,6.19,3h0a.71.71,0,0,0-.6.34Z"
            />
            <path
                d="M14,11.25A2.75,2.75,0,0,1,11.25,14H2.75A2.75,2.75,0,0,1,0,11.25V2.75A2.75,2.75,0,0,1,2.75,0h8.5A2.75,2.75,0,0,1,14,2.75ZM2.75,1.5A1.25,1.25,0,0,0,1.5,2.75v8.5A1.25,1.25,0,0,0,2.75,12.5h8.5a1.25,1.25,0,0,0,1.25-1.25V2.75A1.25,1.25,0,0,0,11.25,1.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceFavoriteLikeSquareAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
