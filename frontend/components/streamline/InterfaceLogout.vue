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
                d="M9.48,10.77a2.64,2.64,0,0,1-.64-1.09A.24.24,0,0,0,8.6,9.5H5.25a2.5,2.5,0,0,1,0-5H8.6a.24.24,0,0,0,.24-.18,2.64,2.64,0,0,1,.64-1.09,3.29,3.29,0,0,1,.41-.33A.24.24,0,0,0,10,2.69V1A1,1,0,0,0,9,0H1A1,1,0,0,0,0,1V13a1,1,0,0,0,1,1H9a1,1,0,0,0,1-1V11.31a.24.24,0,0,0-.11-.21A3.29,3.29,0,0,1,9.48,10.77Z"
            />
            <path
                d="M13.78,7.53a.75.75,0,0,0,0-1.06l-2-2a.75.75,0,0,0-1.06,1.06l.29.29a.26.26,0,0,1,.06.28.25.25,0,0,1-.23.15H5.25a.75.75,0,0,0,0,1.5h5.59a.25.25,0,0,1,.23.15.26.26,0,0,1-.06.28l-.29.29a.75.75,0,0,0,0,1.06.75.75,0,0,0,1.06,0Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceLogout',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
