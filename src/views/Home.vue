<template>
  <div class='wrap'>
      <HeroImage></HeroImage>
      <div class='content'>
            <Card>
                <strong>Le Furry is an all-you-need petshop that will stop your comute to get what your pets need.</strong>
                <br><br>
                <p>We have it all:</p>
                <br>
                <ul style='margin-left: 20px;'>
                    <li>Toys</li>
                    <li>Food</li>
                    <li>Beds</li>
                    <li>Medical care</li>
                    <li>Beauty Salon</li>
                </ul>
                <br>
                <p>All you need in one place - this website</p><br>
                <p>No need to call, message or come to our store. Everything can be done digitaly thorught the website so you don't have to leave the confort of your home.</p><br>
                <h4 style='text-align: center;'>What are you wiating for? Register and find out more!</h4>
            </Card>
      </div>
  </div>
</template>

<script>
import HeroImage from '@/components/HeroImage.vue';
import Card from '@/components/Card.vue'

export default {
    name: 'Home',
    components:{
        HeroImage,
        Card
    }
}
</script>

<style scoped>

</style>