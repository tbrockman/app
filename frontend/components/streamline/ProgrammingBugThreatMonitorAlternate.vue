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
                d="M7,4.75a.76.76,0,0,0-.75.75V7a.75.75,0,0,0,1.5,0V5.5A.76.76,0,0,0,7,4.75Z"
            />
            <path
                d="M12.25,1H1.75A1.76,1.76,0,0,0,0,2.75v6.5A1.76,1.76,0,0,0,1.75,11H5a.26.26,0,0,1,.21.11.29.29,0,0,1,0,.24L4.56,13a.75.75,0,0,0,.69,1h3.5a.75.75,0,0,0,.69-1l-.67-1.61a.29.29,0,0,1,0-.24A.26.26,0,0,1,9,11h3.25A1.76,1.76,0,0,0,14,9.25V2.75A1.76,1.76,0,0,0,12.25,1ZM10.82,9a1.22,1.22,0,0,1-1,.53H4.2a1.22,1.22,0,0,1-1-.53,1,1,0,0,1-.05-1.09l2.8-5.26a1.23,1.23,0,0,1,2.14,0l2.8,5.26A1,1,0,0,1,10.82,9Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'ProgrammingBugThreatMonitorAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
