<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <g>
                <path
                    d="M9.1,8.2a.26.26,0,0,0,.25.07.24.24,0,0,0,.17-.19l.73-3.65a.56.56,0,0,0-.15-.51.56.56,0,0,0-.52-.16l-3.64.73a.24.24,0,0,0-.19.17.25.25,0,0,0,.06.25Z"
                />
                <path
                    d="M4.93,5.8a.26.26,0,0,0-.25-.07.27.27,0,0,0-.18.19L3.77,9.57a.59.59,0,0,0,.16.51.55.55,0,0,0,.51.16l3.65-.73a.25.25,0,0,0,.13-.42Z"
                />
            </g>
            <path
                d="M7,14a7,7,0,1,1,7-7A7,7,0,0,1,7,14ZM7,1.5A5.5,5.5,0,1,0,12.5,7,5.51,5.51,0,0,0,7,1.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'TravelMapLocationCompass2Alternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
