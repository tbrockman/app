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
                d="M3.75,14h-1A2.25,2.25,0,0,1,.5,11.75V2.25A2.25,2.25,0,0,1,2.75,0h1A2.25,2.25,0,0,1,6,2.25v9.5A2.25,2.25,0,0,1,3.75,14Zm-1-12a.25.25,0,0,0-.25.25v9.5a.25.25,0,0,0,.25.25h1A.25.25,0,0,0,4,11.75V2.25A.25.25,0,0,0,3.75,2Z"
            />
            <path
                d="M11.25,14h-1A2.25,2.25,0,0,1,8,11.75V2.25A2.25,2.25,0,0,1,10.25,0h1A2.25,2.25,0,0,1,13.5,2.25v9.5A2.25,2.25,0,0,1,11.25,14Zm-1-12a.25.25,0,0,0-.25.25v9.5a.25.25,0,0,0,.25.25h1a.25.25,0,0,0,.25-.25V2.25A.25.25,0,0,0,11.25,2Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'EntertainmentControlButtonPause1Alternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
