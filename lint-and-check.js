import {exec} from 'child_process';

exec(
  "prettier --write '{public,src}/**/*.{css,html,js,svelte}' && eslint --fix --quiet src --ext .js,.svelte",
  (err, stdout, stderr) => {
    if (err) {
      console.error(`Errore durante l'esecuzione del linting: ${stderr}`);
      process.exit(1);
    }

    // Verifica se ci sono modifiche non committate
    exec('git diff', (err, stdout) => {
      if (stdout) {
        console.log(
          'Sono state rilevate modifiche non committate dopo il linting. Eseguo il commit di queste modifiche...'
        );

        // Aggiunge le modifiche all'indice di Git e fa un commit
        exec(
          'git add . && git commit -m "Auto Lint"',
          (commitError, commitStdout, commitStderr) => {
            if (commitError) {
              console.error(
                `Errore durante l'esecuzione del commit: ${commitStderr}`
              );
              process.exit(1);
            }

            console.log('Modifiche committate con successo.');
          }
        );
      }
    });
  }
);
