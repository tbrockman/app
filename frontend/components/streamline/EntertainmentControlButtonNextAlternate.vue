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
                d="M1.86,13A1.87,1.87,0,0,1,0,11.15V2.85A1.86,1.86,0,0,1,3,1.42l4.8,4A2.1,2.1,0,0,1,8.61,7a2.08,2.08,0,0,1-.76,1.63L3,12.58A1.87,1.87,0,0,1,1.86,13Zm0-10.5a.36.36,0,0,0-.36.35v8.3a.37.37,0,0,0,.58.27L6.89,7.47a.61.61,0,0,0,0-.94L2.08,2.58A.35.35,0,0,0,1.86,2.5Z"
            />
            <path
                d="M12,13.5h-.5a2,2,0,0,1-2-2v-9a2,2,0,0,1,2-2H12a2,2,0,0,1,2,2v9A2,2,0,0,1,12,13.5ZM11.5,2a.5.5,0,0,0-.5.5v9a.5.5,0,0,0,.5.5H12a.5.5,0,0,0,.5-.5v-9A.5.5,0,0,0,12,2Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'EntertainmentControlButtonNextAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
