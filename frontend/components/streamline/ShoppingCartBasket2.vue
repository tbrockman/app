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
                d="M13.58,6.61h0A1.76,1.76,0,0,0,12.25,6H1.75A1.75,1.75,0,0,0,0,8l.69,4.5A1.74,1.74,0,0,0,2.44,14h9.12a1.74,1.74,0,0,0,1.73-1.48L14,8A1.76,1.76,0,0,0,13.58,6.61Z"
            />
            <g>
                <path
                    d="M1.75,4.31a.76.76,0,0,1-.06-1.06L3.94.75a.75.75,0,0,1,1.12,1L2.81,4.25A.76.76,0,0,1,1.75,4.31Z"
                />
                <path
                    d="M11.19,4.25,8.94,1.75a.75.75,0,0,1,1.12-1l2.25,2.5a.75.75,0,0,1-1.12,1Z"
                />
            </g>
        </g>
    </svg>
</template>
<script>
export default {
    name: 'ShoppingCartBasket2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
