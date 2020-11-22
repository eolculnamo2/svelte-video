<script lang="ts">
  import { OverlayStyles } from "../../types";

  export let text: string;
  export let overlayStyles = new OverlayStyles()
                                .setTop(50)
                                .setLeft(100)
                                .setOpacity(.5);
</script>

<style>
  .wrapper {
    background-color: red;
    color: white;
    font-size: 22px;
    padding: .5em;
    position: absolute;
  }
</style>

<div class="wrapper" style={`top:${overlayStyles.top}px;left:${overlayStyles.left}px;opacity:${overlayStyles.opacity}`}>
  {text}
</div>