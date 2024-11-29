import type { Config } from 'jest' // Importa o tipo "Config" do Jest

const config: Config = {
  bail: true, // Interrompe os testes no primeiro erro
  clearMocks: true, // Limpa mocks automaticamente após cada teste
  collectCoverage: false, // desativa a coleta de cobertura de código
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'], // Especifica os arquivos para coleta de cobertura
  coverageDirectory: 'coverage', // Define o diretório para armazenar os relatórios de cobertura
  coverageProvider: 'v8', // Define o motor de cobertura de código
  transform: {
    '.+\\.ts$': 'ts-jest' // Usa "ts-jest" para transformar arquivos TypeScript
  }
}

export default config // Exporta a configuração
