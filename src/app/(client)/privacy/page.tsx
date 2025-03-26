import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-20 pt-20 bg-gray-900 text-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight mb-2 text-white">Política de Privacidade</h1>
          <p className="text-gray-400">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>
        </div>

        <Card className="mb-8 bg-gray-800 border-gray-700 shadow-lg">
          <CardHeader>
            <CardTitle className="text-white">Introdução</CardTitle>
            <CardDescription className="text-gray-400">Nosso compromisso com a proteção dos seus dados</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 leading-relaxed mb-4">
              A Carvalho e Castro está comprometida em proteger a
              privacidade e os dados pessoais de nossos clientes e visitantes do site. Esta Política de Privacidade
              descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais em conformidade com a
              Lei Geral de Proteção de Dados (LGPD) e outras legislações aplicáveis.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Ao utilizar nossos serviços ou acessar nosso site, você concorda com as práticas descritas nesta política.
              Recomendamos a leitura atenta deste documento para compreender nossos procedimentos relativos aos seus
              dados pessoais.
            </p>
          </CardContent>
        </Card>

        <Accordion type="single" collapsible className="mb-8">
          <AccordionItem value="item-1" className="border-gray-700">
            <AccordionTrigger className="text-lg font-semibold text-white hover:text-gray-300 px-0">
              Dados que Coletamos
            </AccordionTrigger>
            <AccordionContent className="text-gray-300 leading-relaxed space-y-4">
              <p>Podemos coletar os seguintes tipos de informações pessoais:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-gray-200">Dados de identificação:</strong> nome completo
                </li>
                <li>
                  <strong className="text-gray-200">Dados de contato:</strong> endereço, e-mail, telefone.
                </li>
                <li>
                  <strong className="text-gray-200">Dados profissionais:</strong> profissão, cargo, empresa.
                </li>
                <li>
                  <strong className="text-gray-200">Dados relacionados ao caso:</strong> documentos e informações relevantes para a prestação de
                  serviços jurídicos.
                </li>
                <li>
                  <strong className="text-gray-200">Dados de navegação:</strong> cookies, informações sobre o dispositivo utilizado
                  para acessar o site.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-gray-700">
            <AccordionTrigger className="text-lg font-semibold text-white hover:text-gray-300 px-0">
              Como Utilizamos seus Dados
            </AccordionTrigger>
            <AccordionContent className="text-gray-300 leading-relaxed space-y-4">
              <p>Utilizamos seus dados pessoais para as seguintes finalidades:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Prestação de serviços jurídicos contratados;</li>
                <li>Comunicação com clientes sobre seus casos e processos;</li>
                <li>Cumprimento de obrigações legais e regulatórias;</li>
                <li>
                  Envio de informações sobre nossos serviços, eventos e conteúdos jurídicos (mediante consentimento);
                </li>
                <li>Aprimoramento de nossos serviços e da experiência do usuário em nosso site;</li>
                <li>Proteção dos interesses legítimos do escritório e de nossos clientes.</li>
              </ul>
              <p>
                O tratamento de dados pessoais é realizado com base nas seguintes hipóteses legais previstas na LGPD:
                cumprimento de obrigação legal, execução de contrato, consentimento do titular, interesse legítimo e
                exercício regular de direitos em processo.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-gray-700">
            <AccordionTrigger className="text-lg font-semibold text-white hover:text-gray-300 px-0">
              Compartilhamento de Dados
            </AccordionTrigger>
            <AccordionContent className="text-gray-300 leading-relaxed space-y-4">
              <p>Podemos compartilhar seus dados pessoais nas seguintes circunstâncias:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Com órgãos públicos e tribunais, quando necessário para a prestação dos serviços jurídicos
                  contratados;
                </li>
                <li>Com outros profissionais envolvidos no seu caso, mediante sua autorização;</li>
                <li>Em cumprimento de ordem judicial ou requisição de autoridade competente;</li>
                <li>Em caso de operações societárias envolvendo nosso escritório.</li>
              </ul>
              <p>
                Todos os terceiros com quem compartilhamos dados estão sujeitos a obrigações contratuais de
                confidencialidade e devem implementar medidas de segurança adequadas.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-gray-700">
            <AccordionTrigger className="text-lg font-semibold text-white hover:text-gray-300 px-0">
              Armazenamento e Segurança
            </AccordionTrigger>
            <AccordionContent className="text-gray-300 leading-relaxed space-y-4">
              <p>
                Implementamos medidas técnicas e organizacionais apropriadas para proteger seus dados pessoais contra
                acesso não autorizado, perda acidental ou alteração indevida, incluindo:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Criptografia de dados sensíveis;</li>
                <li>Controles de acesso rigorosos;</li>
                <li>Políticas internas de proteção de dados;</li>
                <li>Treinamento regular de nossa equipe sobre práticas de segurança da informação;</li>
                <li>Avaliações periódicas de nossos sistemas de segurança.</li>
              </ul>
              <p>
                Armazenamos seus dados pelo tempo necessário para cumprir as finalidades para as quais foram coletados,
                observando os prazos legais de guarda de documentos e as normas aplicáveis à advocacia.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border-gray-700">
            <AccordionTrigger className="text-lg font-semibold text-white hover:text-gray-300 px-0">
              Seus Direitos
            </AccordionTrigger>
            <AccordionContent className="text-gray-300 leading-relaxed space-y-4">
              <p>Em conformidade com a LGPD, você possui os seguintes direitos em relação aos seus dados pessoais:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Confirmação da existência de tratamento de seus dados;</li>
                <li>Acesso aos dados que possuímos sobre você;</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;</li>
                <li>Portabilidade dos dados a outro fornecedor de serviço, mediante requisição expressa;</li>
                <li>Eliminação dos dados tratados com base no consentimento;</li>
                <li>Informação sobre entidades públicas e privadas com as quais compartilhamos seus dados;</li>
                <li>Revogação do consentimento, quando aplicável.</li>
              </ul>
              <p>
                Para exercer esses direitos, entre em contato com nosso Encarregado de Proteção de Dados através do
                e-mail [email@escritorio.com.br].
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Card className="mb-8 bg-gray-800 border-gray-700 shadow-lg">
          <CardHeader>
            <CardTitle className="text-white">Cookies e Tecnologias Semelhantes</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 leading-relaxed space-y-4">
            <p>
              Nosso site utiliza cookies e tecnologias semelhantes para melhorar sua experiência de navegação, analisar
              o tráfego do site e personalizar conteúdo. Os cookies são pequenos arquivos de texto armazenados em seu
              dispositivo quando você visita nosso site.
            </p>
            <p>Utilizamos os seguintes tipos de cookies:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-gray-200">Cookies essenciais:</strong> necessários para o funcionamento básico do site;
              </li>
              <li>
                <strong className="text-gray-200">Cookies analíticos:</strong> para análise de uso e melhoria do desempenho do site;
              </li>
              <li>
                <strong className="text-gray-200">Cookies de funcionalidade:</strong> para lembrar suas preferências e personalizar sua
                experiência;
              </li>
              <li>
                <strong className="text-gray-200">Cookies de marketing:</strong> para exibir conteúdo relevante aos seus interesses (utilizados
                apenas com seu consentimento).
              </li>
            </ul>
            <p>
              Você pode gerenciar suas preferências de cookies através das configurações do seu navegador. No entanto, a
              desativação de certos cookies pode afetar a funcionalidade do site.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-6 mb-8">
          <h2 className="text-xl font-semibold text-white">Alterações nesta Política</h2>
          <p className="text-gray-300 leading-relaxed">
            Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas ou
            por outros motivos operacionais, legais ou regulatórios. Recomendamos que você revise esta política
            regularmente. A data da última atualização será sempre indicada no início do documento.
          </p>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-white">Contato</h2>
          <p className="text-gray-300 leading-relaxed">
            Se você tiver dúvidas, preocupações ou solicitações relacionadas a esta Política de Privacidade ou ao
            tratamento de seus dados pessoais, entre em contato com nosso Encarregado de Proteção de Dados:
          </p>
          <div className="text-gray-300">
            <p>
              <strong className="text-gray-200">E-mail:</strong> [email@escritorio.com.br]
            </p>
            <p>
              <strong className="text-gray-200">Telefone:</strong> [(XX) XXXX-XXXX]
            </p>
            <p>
              <strong className="text-gray-200">Endereço:</strong> [Endereço completo do escritório]
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}