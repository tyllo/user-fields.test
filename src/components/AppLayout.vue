<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-narrow">
            <slot name="left" />
          </div>
          <div class="column is-narrow">
            <slot name="right" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
