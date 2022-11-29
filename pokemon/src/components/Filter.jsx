import { Button, ButtonGroup } from "@mui/material";

function Filter() {
  return (
    <ButtonGroup variant="text" aria-label="text button group">
      <Button>Previous Pokemon</Button>
      <Button>Random Pokemon</Button>
      <Button>Next Pokemon</Button>
      <Button>More Details...</Button>
    </ButtonGroup>
  );
}

export default Filter;
