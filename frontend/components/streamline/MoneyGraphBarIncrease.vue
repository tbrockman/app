<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <rect x="10.31" y="5.5" width="3.5" height="8.5" rx="1.25" />
            <rect x="0.31" y="9.5" width="3.5" height="4.5" rx="1.25" />
            <rect x="5.31" y="7.5" width="3.5" height="6.5" rx="1.25" />
            <path
                d="M13.33.83a.71.71,0,0,0-.54-.39L10.33,0a.74.74,0,0,0-.73.3.73.73,0,0,0-.07.78l.35.67L.6,6.5a.76.76,0,0,0-.32,1A.74.74,0,0,0,1,7.92a.72.72,0,0,0,.34-.09L10.56,3.1l.34.66a.76.76,0,0,0,.67.41h0a.73.73,0,0,0,.67-.42l1.1-2.25A.75.75,0,0,0,13.33.83Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'MoneyGraphBarIncrease',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
