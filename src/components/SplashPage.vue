<template>
    <div :class="{ loader: true, fadeout: !isLoading }">
        <div class="mt-14 mb-24">
            <img src="../assets/Logo.svg"/>
        </div>
    </div>
</template>
<script>
export default{
    props: ["isLoading"]
}
</script>
<style>
.loader {
  background-color: #744966;
  bottom: 0;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  overflow: hidden;
  position: fixed;
  right: 0;
  text-align: center;
  top: 0;
}

.fadeout {
  animation: fadeout 3s forwards;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>