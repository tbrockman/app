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
                d="M12.25,14h-8a.75.75,0,0,1,0-1.5h8a.25.25,0,0,0,.25-.25v-8a.75.75,0,0,1,1.5,0v8A1.76,1.76,0,0,1,12.25,14Z"
            />
            <path
                d="M8.75,11H2.25A2.25,2.25,0,0,1,0,8.75V2.25A2.25,2.25,0,0,1,2.25,0h6.5A2.25,2.25,0,0,1,11,2.25v6.5A2.25,2.25,0,0,1,8.75,11ZM2.25,1.5a.76.76,0,0,0-.75.75v6.5a.76.76,0,0,0,.75.75h6.5a.76.76,0,0,0,.75-.75V2.25a.76.76,0,0,0-.75-.75Z"
            />
            <path
                d="M3.5,7.39V3.61a.36.36,0,0,1,.55-.31L7.32,5.19a.36.36,0,0,1,0,.62L4.05,7.7A.36.36,0,0,1,3.5,7.39Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'EntertainmentPlayList8Alternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
