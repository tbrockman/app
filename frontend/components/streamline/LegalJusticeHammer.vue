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
                d="M7.87,12.84l-.7-1.06A1.76,1.76,0,0,0,5.71,11H2.29a1.76,1.76,0,0,0-1.46.78l-.7,1.06a.74.74,0,0,0,0,.77A.75.75,0,0,0,.75,14h6.5a.75.75,0,0,0,.66-.39A.74.74,0,0,0,7.87,12.84Z"
            />
            <path
                d="M13.8,11,10.49,6.64a.25.25,0,0,1-.05-.19.26.26,0,0,1,.09-.16l1-.76c1-.76.93-2.49-.17-3.95C10.42.35,8.77-.53,7.6.35l-4,3c-1,.76-.93,2.5.17,4,.94,1.24,2.61,2.1,3.75,1.23l1-.75a.25.25,0,0,1,.35,0l3.31,4.37A1,1,0,0,0,13.8,11Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'LegalJusticeHammer',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
