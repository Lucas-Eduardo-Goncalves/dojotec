import { useState } from "react";
import { Button, Card, Spinner } from "~/client/components";

export function View() {
  const [isLoading1, setIsLoading1] = useState(false);
  function handleActivateLoading1() {
    setIsLoading1(true);
    setTimeout(() => setIsLoading1(false), 4000);
  }

  const [isLoading2, setIsLoading2] = useState(false);
  function handleActivateLoading2() {
    setIsLoading2(true);
    setTimeout(() => setIsLoading2(false), 4000);
  }

  const [isLoading3, setIsLoading3] = useState(false);
  function handleActivateLoading3() {
    setIsLoading3(true);
    setTimeout(() => setIsLoading3(false), 4000);
  }

  return (
    <Card space={4} spacing={4} direction="column">
      <Card space={4} spacing={2} radii="xs" showBgColor boxShadow="xs">
        <Button isLoading={isLoading1} onClick={handleActivateLoading1}>
          Super Button
        </Button>
        <Button
          isLoading={isLoading2}
          onClick={handleActivateLoading2}
          variant="outline"
        >
          Outline button
        </Button>
        <Button
          isLoading={isLoading3}
          onClick={handleActivateLoading3}
          variant="ghost"
        >
          Ghost button
        </Button>
      </Card>

      <Card space={4} spacing={2} radii="xs" showBgColor boxShadow="xs">
        <Spinner size="xs" />
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" />
        <Spinner size="xl" />
        <Spinner size="2xl" />
      </Card>
    </Card>
  );
}
