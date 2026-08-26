const SUPPORT_EMAIL = 'victormm.dev@gmail.com'

const section = (id, title, paragraphs, bullets = []) => ({ id, title, paragraphs, bullets })

export const LEGAL_CONTENT = {
  en: {
    common: {
      version: 'Version',
      effective: 'Effective',
      updated: 'Last updated',
      contents: 'On this page',
      contactSupport: 'Contact Support'
    },
    terms: {
      title: 'Terms of Service',
      intro: 'These Terms explain how Posterfy works, what Print-Ready includes, and the rules that help keep the platform fair and reliable.',
      sections: [
        section('posterfy', '1. About Posterfy', [
          'Posterfy is a platform for creating, editing, viewing, and exporting customized posters related to music albums. When available, users may also publish posters to the Community.',
          'Posterfy provides creative software tools. It does not sell albums, music, album artwork, or merchandise.'
        ]),
        section('free', '2. Free features', [
          'Posterfy offers a free way to create and export posters. The formats, sizes, watermark, and other features included in the free experience may evolve as the product improves.'
        ]),
        section('print-ready', '3. Print-Ready', [
          'Print-Ready is a paid unlock for advanced export features for the selected album. It is a one-time purchase, not a subscription, and has no recurring charge.',
          'The unlock is linked to the Posterfy account used for the purchase. While active, it allows new exports for that album, regardless of a particular exported file, and may be used with posters for that album that the account is allowed to access. Different versions or editions of an album may be treated as separate unlocks.'
        ], [
          'Eligible PNG and print-ready PDF exports',
          'Normal and Extreme export sizes',
          'No Posterfy watermark',
          'Unlimited re-exports while the unlock remains active'
        ]),
        section('permanent', '4. What “permanent” means', [
          'When Posterfy describes an unlock as permanent, it means the unlock has no time-based expiry and no recurring charge while the account and unlock remain active.',
          'It is not a promise that Posterfy, the Internet, or third-party services will exist indefinitely or always operate in exactly the same form. Posterfy will not use service changes as a basis to remove a valid paid benefit arbitrarily.'
        ]),
        section('accounts', '5. Accounts and security', [
          'Print-Ready requires a Posterfy account. You are responsible for keeping access to your account secure and for activity performed through it. Accounts must not be shared or used to commit fraud, evade payment, or abuse the platform.',
          'Permanently deleting an account removes its associated Print-Ready unlocks. If an account-deletion option is presented, this consequence should also be shown in that flow.'
        ]),
        section('payments', '6. Prices and payment', [
          'The total price is shown before purchase. Print-Ready is processed as a one-time payment by Stripe, a third-party payment processor. Posterfy does not store your full card number or card security code.',
          'Depending on your country and payment method, currency conversion, issuer fees, or applicable taxes may affect the final amount charged or shown by your provider.'
        ]),
        section('ownership', '7. Content and intellectual property', [
          'Posterfy owns or licenses its software, brand, interface, visual identity, and original materials. You keep the rights you hold in elements you create or add.',
          'Artist and album names, artwork, trademarks, metadata, and other materials may belong to third parties. Buying Print-Ready grants access to a Posterfy feature; it does not sell an album, transfer copyright or trademark rights, grant a commercial license to third-party content, or imply endorsement by any artist or record label.',
          'You are responsible for ensuring that your use of exported files is appropriate for your circumstances and complies with applicable rights and rules.'
        ]),
        section('community', '8. Community', [
          'Public posters may be viewed by other people. Private posters remain subject to Posterfy access controls. You are responsible for content you voluntarily publish and must not publish illegal, abusive, or materially infringing content.',
          'For content in which you control the relevant rights, you give Posterfy a limited, non-exclusive license to host, process, display, and distribute that content within Posterfy only as needed to operate, promote within, and moderate the Community. Posterfy does not become the owner of your posters.',
          'Posterfy may review, restrict, or remove content when reasonably necessary to enforce these Terms, respond to reports, protect users, or comply with applicable obligations.'
        ]),
        section('acceptable-use', '9. Fair use and enforcement', [
          'Fraud, system manipulation, abusive chargebacks, attempts to obtain paid benefits without valid payment, and material violations of these Terms are prohibited.',
          'Where supported by the circumstances, Posterfy may take proportionate measures such as limiting access, suspending an account, removing content, or revoking an affected unlock. We aim to relate enforcement to the documented issue rather than act arbitrarily.'
        ]),
        section('availability', '10. Availability and service changes', [
          'Posterfy may fix bugs, change its interface, improve export formats, add or remove features, perform maintenance, and adapt to changes in third-party services. Temporary interruptions may occur, and absolute uptime is not promised.',
          'When a change materially affects a paid feature, Posterfy will seek a reasonable solution consistent with applicable law and will not deliberately destroy valid paid benefits without a legitimate reason.'
        ]),
        section('liability', '11. Responsibility and limits', [
          'To the maximum extent permitted by applicable law, Posterfy is not responsible for temporary unavailability, actions or failures of third parties, misuse by a user, or events outside Posterfy’s reasonable control.',
          'Nothing in these Terms excludes or limits responsibility or consumer rights that cannot legally be excluded or limited.'
        ]),
        section('updates', '12. Changes to these Terms', [
          'Posterfy may update these Terms as the service, law, or commercial practices evolve. Material changes will receive a new version and updated date, and users may be informed when appropriate.',
          'The version recorded with a prior purchase will not be silently replaced in that purchase record.'
        ]),
        section('contact', '13. Contact and mandatory rights', [
          `Questions may be sent to ${SUPPORT_EMAIL}. Mandatory rights available under the law applicable to you remain preserved.`
        ])
      ]
    },
    privacy: {
      title: 'Privacy Policy',
      intro: 'This Policy explains what information Posterfy handles, why it is used, and how to contact us about privacy.',
      sections: [
        section('account-data', '1. Account data', [
          'When you sign in, Posterfy may receive and store information such as your name, username, email address, profile image, account-provider reference, and account settings. We use it to authenticate you, operate your account, provide support, and protect the service.'
        ]),
        section('content', '2. Posters, profiles, and Community', [
          'Posterfy handles poster designs, album information, publication and visibility choices, profile information, and related activity. This allows you to create, save, display, and publish content according to the options you choose.',
          'Public posters and public profile information can be seen by others. Private content remains subject to Posterfy access controls and may be accessed when reasonably necessary for support, security, or moderation.'
        ]),
        section('purchases', '3. Purchases', [
          'For Print-Ready purchases, Posterfy may retain a purchase reference, the account, selected album, amount, currency, status, timestamps, and identifiers needed for support and financial reconciliation.',
          'Payments are processed by Stripe. Posterfy does not store full card numbers or card security codes. Purchase information is used for checkout, delivery of the unlock, refunds, disputes, fraud prevention, support, accounting, and audit.'
        ]),
        section('browser-storage', '4. Browser storage', [
          'Posterfy may store limited information in your browser for authentication, preferences such as language and theme, and temporary continuity of your work. For example, a limited-lived editor state may help return you to your poster after sign-in or Checkout.',
          'Browser storage is not treated as proof of payment. You can clear it through your browser, although doing so may sign you out or remove preferences and temporary work state.'
        ]),
        section('providers', '5. Service providers', [
          'Posterfy uses providers that help deliver the service, including Google for authentication, Stripe for payment processing, Spotify for music and album information, hosting and data-storage services, and Google Analytics or Google Tag Manager for usage analytics.',
          'These providers may process information under their own terms and privacy policies. Posterfy shares only what is reasonably needed for the relevant function.'
        ]),
        section('analytics', '6. Analytics and cookies', [
          'Posterfy may use analytics technologies to understand visits, interactions, device or browser characteristics, approximate location, and product performance. This information helps us understand usage and improve the product.',
          'Analytics and similar technologies may use cookies or comparable browser identifiers. Available preferences and consent requirements vary by jurisdiction and by your browser or provider settings.'
        ]),
        section('retention', '7. Retention', [
          'We use the nature and purpose of the information, account status, operational needs, disputes, fraud prevention, and legal obligations to determine retention. Temporary editor state is kept for a limited period. Account data is generally kept while the account exists and as legitimately needed afterward.',
          'Community information is generally kept while published or as needed to operate and moderate the service. Financial records may be kept as needed for support, refunds, disputes, fraud prevention, accounting, and legal obligations. Operational logs are kept under current security and operational practices.'
        ]),
        section('rights', '8. Your privacy rights', [
          `Depending on the law applicable to you, you may request access, correction, deletion, information about processing, or other available privacy rights by contacting ${SUPPORT_EMAIL}. Some requests require manual review, identity verification, or retention of limited information where legally permitted or required.`
        ]),
        section('security', '9. Security', [
          'Posterfy uses reasonable administrative and technical measures to protect information. No online service can guarantee absolute security, so please protect your account and contact us if you suspect unauthorized access.'
        ]),
        section('updates-contact', '10. Updates and contact', [
          `This Policy may be updated as Posterfy and its practices evolve. Material revisions receive a new version and date. Privacy questions or requests can be sent to ${SUPPORT_EMAIL}.`
        ])
      ]
    },
    refund: {
      title: 'Refund Policy',
      intro: 'This Policy explains how Print-Ready refund requests are reviewed while preserving any mandatory rights available to you.',
      sections: [
        section('mandatory-rights', '1. Mandatory rights', [
          'Nothing in this Policy limits mandatory refund, withdrawal, cancellation, or consumer-protection rights available under the law applicable to you.'
        ]),
        section('voluntary-requests', '2. Voluntary refund requests', [
          'Outside situations required by law, refund requests are reviewed individually. Submitting a request does not guarantee approval. We consider the purchase, use of the paid feature, technical facts, and other relevant circumstances.'
        ]),
        section('situations', '3. Situations we may consider', [
          'Circumstances that may support review include the following. This list is illustrative and is not an automatic promise of a refund.'
        ], [
          'A duplicate or incorrect charge',
          'A completed payment where the unlock was not delivered and the issue could not be resolved',
          'A material Posterfy technical failure directly related to the purchase',
          'Other exceptional circumstances assessed by Support'
        ]),
        section('request-info', '4. Information for a request', [
          `Send your request to ${SUPPORT_EMAIL}. To locate and review the purchase, we may ask for your Posterfy account, album name, approximate payment date, receipt or transaction reference when available, and a description of the issue.`,
          'Never send your password, full card number, card security code, or unrelated sensitive information.'
        ]),
        section('review', '5. Review and timing', [
          'Please contact us promptly after identifying an issue so that records and technical information remain available. No fixed discretionary deadline is established in this version of the Policy. Review time depends on the circumstances, information provided, and payment-provider processing.',
          'Operational timing does not reduce mandatory rights under applicable law.'
        ]),
        section('unlock', '6. Refunds and Print-Ready access', [
          'A refund changes the financial state of a purchase, while Print-Ready access is managed separately. A full refund will ordinarily allow Posterfy to revoke the related unlock. In some circumstances, Posterfy may leave it active as a courtesy.',
          'Neither continued access nor revocation is promised automatically in every case; the result depends on the reason, applicable rights, and resolution provided.'
        ]),
        section('chargebacks', '7. Chargebacks, fraud, and abuse', [
          'If you do not recognize a charge or have a purchase problem, please contact Support so we can investigate. Nothing here prevents you from using rights available through your issuer or applicable law.',
          'Documented fraud, abusive chargebacks, system manipulation, or attempts to retain multiple paid benefits without valid payment may result in proportionate measures, including limitation or revocation of the affected access.'
        ]),
        section('contact', '8. Contact', [
          `Refund questions and requests can be sent to ${SUPPORT_EMAIL}.`
        ])
      ]
    },
    support: {
      title: 'Support',
      intro: 'Choose the details that match your issue so we can help more efficiently.',
      sections: [
        section('billing', 'Billing and Print-Ready', [
          'For a purchase, unlock, or refund question, include your Posterfy account, album name, approximate payment date, receipt or transaction reference when available, and a short description of the issue. Never send a full card number or card security code.'
        ]),
        section('account', 'Account', [
          'Describe the sign-in, profile, access, or account-security issue and the email associated with your Posterfy account. Never send your password.'
        ]),
        section('technical', 'Technical issue', [
          'Tell us what you expected, what happened, the browser or device used, and the steps that reproduce the issue. A screenshot may help if it does not expose sensitive information.'
        ]),
        section('privacy', 'Privacy', [
          'Use the contact below for access, correction, deletion, or other privacy questions. Requests may require manual review and reasonable identity verification.'
        ]),
        section('community', 'Community or content report', [
          'Include the poster or profile link, the reason for the report, and any context that helps us review it. Do not include unrelated personal or sensitive information.'
        ]),
        section('contact', 'Contact Support', [
          `Email ${SUPPORT_EMAIL}. We will review the request and respond as reasonably possible based on its nature and complexity.`
        ])
      ]
    }
  },
  pt: {
    common: {
      version: 'Versão',
      effective: 'Vigência',
      updated: 'Última atualização',
      contents: 'Nesta página',
      contactSupport: 'Falar com o Suporte'
    },
    terms: {
      title: 'Termos de Serviço',
      intro: 'Estes Termos explicam como o Posterfy funciona, o que o Print-Ready inclui e as regras que ajudam a manter a plataforma justa e confiável.',
      sections: [
        section('posterfy', '1. Sobre o Posterfy', [
          'O Posterfy é uma plataforma para criar, editar, visualizar e exportar pôsteres personalizados relacionados a álbuns musicais. Quando disponível, usuários também podem publicar pôsteres na Community.',
          'O Posterfy oferece ferramentas de criação. Ele não vende álbuns, músicas, capas de álbuns ou produtos físicos.'
        ]),
        section('free', '2. Recursos gratuitos', [
          'O Posterfy oferece uma forma gratuita de criar e exportar pôsteres. Formatos, tamanhos, marca d’água e outros recursos incluídos na experiência gratuita podem evoluir com o produto.'
        ]),
        section('print-ready', '3. Print-Ready', [
          'Print-Ready é um desbloqueio pago de recursos avançados de exportação para o álbum selecionado. É uma compra única, não uma assinatura, e não possui cobrança recorrente.',
          'O desbloqueio fica vinculado à conta Posterfy usada na compra. Enquanto estiver ativo, permite novas exportações daquele álbum, independentemente de um arquivo específico, e pode ser usado com pôsteres daquele álbum que a conta tenha permissão para acessar. Versões ou edições diferentes de um álbum podem ser tratadas como desbloqueios separados.'
        ], [
          'Exportações elegíveis em PNG e PDF pronto para impressão',
          'Tamanhos de exportação Normal e Extreme',
          'Sem marca d’água Posterfy',
          'Reexportações ilimitadas enquanto o desbloqueio estiver ativo'
        ]),
        section('permanent', '4. O que “permanente” significa', [
          'Quando o Posterfy descreve um desbloqueio como permanente, significa que ele não expira com o tempo nem possui cobrança recorrente enquanto a conta e o desbloqueio permanecerem ativos.',
          'Isso não é uma promessa de que o Posterfy, a Internet ou serviços de terceiros existirão indefinidamente ou funcionarão sempre da mesma forma. O Posterfy não usará mudanças no serviço como justificativa para remover arbitrariamente um benefício pago válido.'
        ]),
        section('accounts', '5. Contas e segurança', [
          'Print-Ready exige uma conta Posterfy. Você é responsável por manter o acesso à conta seguro e pelas atividades realizadas nela. Contas não devem ser compartilhadas nem usadas para fraude, evasão de pagamento ou abuso da plataforma.',
          'Excluir permanentemente uma conta remove os desbloqueios Print-Ready associados. Se uma opção de exclusão da conta for apresentada, essa consequência também deverá aparecer naquele fluxo.'
        ]),
        section('payments', '6. Preços e pagamento', [
          'O preço total é apresentado antes da compra. Print-Ready é processado como pagamento único pela Stripe, uma processadora de pagamentos terceirizada. O Posterfy não armazena o número completo do cartão nem seu código de segurança.',
          'Conforme o país e a forma de pagamento, conversão de moeda, tarifas do emissor ou impostos aplicáveis podem afetar o valor final cobrado ou exibido pelo seu provedor.'
        ]),
        section('ownership', '7. Conteúdo e propriedade intelectual', [
          'O Posterfy possui ou licencia seu software, marca, interface, identidade visual e materiais originais. Você mantém os direitos que possui sobre os elementos que cria ou adiciona.',
          'Nomes de artistas e álbuns, capas, marcas, metadados e outros materiais podem pertencer a terceiros. Comprar Print-Ready dá acesso a um recurso do Posterfy; não vende um álbum, transfere direitos autorais ou de marca, concede licença comercial sobre conteúdo de terceiros ou implica apoio de artista ou gravadora.',
          'Você é responsável por garantir que o uso dos arquivos exportados seja adequado às suas circunstâncias e respeite os direitos e regras aplicáveis.'
        ]),
        section('community', '8. Community', [
          'Pôsteres públicos podem ser vistos por outras pessoas. Pôsteres privados continuam sujeitos aos controles de acesso do Posterfy. Você é responsável pelo conteúdo que publica voluntariamente e não deve publicar conteúdo ilegal, abusivo ou que viole direitos de forma relevante.',
          'Sobre o conteúdo cujos direitos relevantes você controla, você concede ao Posterfy uma licença limitada e não exclusiva para hospedar, processar, exibir e distribuir esse conteúdo dentro do Posterfy, apenas no necessário para operar, divulgar dentro da plataforma e moderar a Community. O Posterfy não se torna proprietário dos seus pôsteres.',
          'O Posterfy pode revisar, restringir ou remover conteúdo quando razoavelmente necessário para aplicar estes Termos, responder a denúncias, proteger usuários ou cumprir obrigações aplicáveis.'
        ]),
        section('acceptable-use', '9. Uso adequado e medidas aplicáveis', [
          'São proibidos fraude, manipulação do sistema, chargebacks abusivos, tentativas de obter benefícios pagos sem pagamento válido e violações materiais destes Termos.',
          'Quando as circunstâncias justificarem, o Posterfy pode adotar medidas proporcionais, como limitar acesso, suspender uma conta, remover conteúdo ou revogar o desbloqueio afetado. Buscamos relacionar a medida ao problema documentado, sem agir arbitrariamente.'
        ]),
        section('availability', '10. Disponibilidade e mudanças no serviço', [
          'O Posterfy pode corrigir falhas, alterar a interface, melhorar formatos de exportação, adicionar ou remover recursos, realizar manutenção e se adaptar a mudanças em serviços de terceiros. Interrupções temporárias podem ocorrer e não prometemos disponibilidade absoluta.',
          'Quando uma mudança afetar materialmente um recurso pago, o Posterfy buscará uma solução razoável compatível com a legislação aplicável e não destruirá deliberadamente benefícios pagos válidos sem motivo legítimo.'
        ]),
        section('liability', '11. Responsabilidade e limites', [
          'No limite máximo permitido pela legislação aplicável, o Posterfy não é responsável por indisponibilidade temporária, ações ou falhas de terceiros, uso indevido por um usuário ou eventos fora do controle razoável do Posterfy.',
          'Nada nestes Termos exclui ou limita responsabilidades ou direitos do consumidor que legalmente não possam ser excluídos ou limitados.'
        ]),
        section('updates', '12. Mudanças nestes Termos', [
          'O Posterfy pode atualizar estes Termos conforme o serviço, a legislação ou as práticas comerciais evoluírem. Mudanças materiais receberão nova versão e data atualizada, e usuários poderão ser informados quando apropriado.',
          'A versão registrada em uma compra anterior não será substituída silenciosamente no registro daquela compra.'
        ]),
        section('contact', '13. Contato e direitos obrigatórios', [
          `Dúvidas podem ser enviadas para ${SUPPORT_EMAIL}. Permanecem preservados os direitos obrigatórios previstos pela legislação aplicável a você.`
        ])
      ]
    },
    privacy: {
      title: 'Política de Privacidade',
      intro: 'Esta Política explica quais informações o Posterfy trata, por que elas são usadas e como falar conosco sobre privacidade.',
      sections: [
        section('account-data', '1. Dados da conta', [
          'Ao entrar, o Posterfy pode receber e armazenar informações como nome, nome de usuário, email, imagem de perfil, referência do provedor da conta e configurações. Usamos esses dados para autenticar você, operar sua conta, prestar suporte e proteger o serviço.'
        ]),
        section('content', '2. Pôsteres, perfis e Community', [
          'O Posterfy trata designs de pôsteres, informações de álbuns, escolhas de publicação e visibilidade, informações de perfil e atividades relacionadas. Isso permite criar, salvar, exibir e publicar conteúdo conforme as opções escolhidas.',
          'Pôsteres e informações de perfil públicos podem ser vistos por outras pessoas. Conteúdo privado continua sujeito aos controles de acesso do Posterfy e pode ser acessado quando razoavelmente necessário para suporte, segurança ou moderação.'
        ]),
        section('purchases', '3. Compras', [
          'Em compras Print-Ready, o Posterfy pode manter uma referência da compra, a conta, o álbum selecionado, valor, moeda, status, datas e identificadores necessários para suporte e conciliação financeira.',
          'Pagamentos são processados pela Stripe. O Posterfy não armazena o número completo do cartão nem seu código de segurança. Informações da compra são usadas no Checkout, entrega do desbloqueio, reembolsos, disputas, prevenção a fraude, suporte, contabilidade e auditoria.'
        ]),
        section('browser-storage', '4. Armazenamento no navegador', [
          'O Posterfy pode guardar informações limitadas no navegador para autenticação, preferências como idioma e tema e continuidade temporária do trabalho. Por exemplo, um estado do editor com duração limitada pode ajudar você a voltar ao pôster depois do login ou Checkout.',
          'O armazenamento do navegador não é considerado prova de pagamento. Você pode limpá-lo pelo navegador, embora isso possa encerrar sua sessão ou remover preferências e o estado temporário do trabalho.'
        ]),
        section('providers', '5. Prestadores de serviço', [
          'O Posterfy usa prestadores que ajudam a entregar o serviço, incluindo Google para autenticação, Stripe para processar pagamentos, Spotify para informações de música e álbuns, serviços de hospedagem e armazenamento de dados e Google Analytics ou Google Tag Manager para análise de uso.',
          'Esses prestadores podem tratar informações segundo seus próprios termos e políticas de privacidade. O Posterfy compartilha apenas o razoavelmente necessário para a respectiva função.'
        ]),
        section('analytics', '6. Analytics e cookies', [
          'O Posterfy pode usar tecnologias de analytics para compreender visitas, interações, características do dispositivo ou navegador, localização aproximada e desempenho do produto. Essas informações ajudam a entender o uso e melhorar o produto.',
          'Analytics e tecnologias semelhantes podem usar cookies ou identificadores comparáveis no navegador. Preferências disponíveis e exigências de consentimento variam conforme a jurisdição e as configurações do navegador ou provedor.'
        ]),
        section('retention', '7. Retenção', [
          'Consideramos natureza e finalidade da informação, situação da conta, necessidades operacionais, disputas, prevenção a fraude e obrigações legais para definir a retenção. O estado temporário do editor é mantido por período limitado. Dados da conta normalmente são mantidos enquanto ela existir e pelo tempo legitimamente necessário depois disso.',
          'Informações da Community normalmente são mantidas enquanto publicadas ou no necessário para operar e moderar o serviço. Registros financeiros podem ser mantidos para suporte, reembolsos, disputas, prevenção a fraude, contabilidade e obrigações legais. Logs operacionais são mantidos conforme as práticas vigentes de segurança e operação.'
        ]),
        section('rights', '8. Seus direitos de privacidade', [
          `Conforme a legislação aplicável a você, é possível solicitar acesso, correção, exclusão, informações sobre o tratamento ou outros direitos disponíveis pelo email ${SUPPORT_EMAIL}. Algumas solicitações exigem análise manual, verificação de identidade ou retenção limitada de informações quando permitida ou exigida por lei.`
        ]),
        section('security', '9. Segurança', [
          'O Posterfy adota medidas administrativas e técnicas razoáveis para proteger informações. Nenhum serviço online pode garantir segurança absoluta; por isso, proteja sua conta e entre em contato se suspeitar de acesso indevido.'
        ]),
        section('updates-contact', '10. Atualizações e contato', [
          `Esta Política pode ser atualizada conforme o Posterfy e suas práticas evoluírem. Revisões materiais recebem nova versão e data. Dúvidas ou solicitações de privacidade podem ser enviadas para ${SUPPORT_EMAIL}.`
        ])
      ]
    },
    refund: {
      title: 'Política de Reembolso',
      intro: 'Esta Política explica como pedidos de reembolso do Print-Ready são analisados, preservando os direitos obrigatórios disponíveis a você.',
      sections: [
        section('mandatory-rights', '1. Direitos obrigatórios', [
          'Nada nesta Política limita direitos obrigatórios de reembolso, arrependimento, cancelamento ou proteção do consumidor previstos pela legislação aplicável a você.'
        ]),
        section('voluntary-requests', '2. Pedidos voluntários de reembolso', [
          'Fora das situações exigidas por lei, pedidos de reembolso são analisados individualmente. Enviar um pedido não garante sua aprovação. Consideramos a compra, o uso do recurso pago, fatos técnicos e outras circunstâncias relevantes.'
        ]),
        section('situations', '3. Situações que podemos considerar', [
          'As circunstâncias abaixo podem justificar uma análise. A lista é ilustrativa e não constitui promessa automática de reembolso.'
        ], [
          'Cobrança duplicada ou incorreta',
          'Pagamento concluído sem entrega do desbloqueio e sem solução possível para o problema',
          'Falha técnica material do Posterfy diretamente relacionada à compra',
          'Outras circunstâncias excepcionais avaliadas pelo Suporte'
        ]),
        section('request-info', '4. Informações para o pedido', [
          `Envie o pedido para ${SUPPORT_EMAIL}. Para localizar e analisar a compra, podemos solicitar sua conta Posterfy, nome do álbum, data aproximada do pagamento, recibo ou referência da transação quando disponível e uma descrição do problema.`,
          'Nunca envie sua senha, número completo do cartão, código de segurança ou informações sensíveis sem relação com o pedido.'
        ]),
        section('review', '5. Análise e prazo', [
          'Entre em contato logo após identificar o problema para que os registros e informações técnicas continuem disponíveis. Esta versão da Política não estabelece um prazo fixo para pedidos discricionários. O tempo de análise depende das circunstâncias, das informações apresentadas e do processamento do meio de pagamento.',
          'Prazos operacionais não reduzem direitos obrigatórios previstos pela legislação aplicável.'
        ]),
        section('unlock', '6. Reembolso e acesso Print-Ready', [
          'Um reembolso altera o estado financeiro da compra, enquanto o acesso Print-Ready é administrado separadamente. Um reembolso integral normalmente permitirá ao Posterfy revogar o desbloqueio relacionado. Em algumas circunstâncias, o Posterfy pode mantê-lo ativo como cortesia.',
          'Nem a continuidade do acesso nem a revogação são prometidas automaticamente em todos os casos; o resultado depende do motivo, dos direitos aplicáveis e da solução oferecida.'
        ]),
        section('chargebacks', '7. Chargebacks, fraude e abuso', [
          'Se você não reconhecer uma cobrança ou tiver um problema com a compra, fale com o Suporte para investigarmos. Nada aqui impede o uso de direitos disponíveis por meio do emissor ou da legislação aplicável.',
          'Fraude documentada, chargebacks abusivos, manipulação do sistema ou tentativas de manter vários benefícios pagos sem pagamento válido podem resultar em medidas proporcionais, inclusive limitação ou revogação do acesso afetado.'
        ]),
        section('contact', '8. Contato', [
          `Dúvidas e pedidos de reembolso podem ser enviados para ${SUPPORT_EMAIL}.`
        ])
      ]
    },
    support: {
      title: 'Suporte',
      intro: 'Informe os detalhes relacionados ao seu problema para podermos ajudar com mais eficiência.',
      sections: [
        section('billing', 'Cobrança e Print-Ready', [
          'Para dúvidas sobre compra, desbloqueio ou reembolso, informe sua conta Posterfy, nome do álbum, data aproximada do pagamento, recibo ou referência da transação quando disponível e uma breve descrição. Nunca envie o número completo do cartão nem o código de segurança.'
        ]),
        section('account', 'Conta', [
          'Descreva o problema de login, perfil, acesso ou segurança e informe o email associado à conta Posterfy. Nunca envie sua senha.'
        ]),
        section('technical', 'Problema técnico', [
          'Conte o que esperava, o que aconteceu, o navegador ou dispositivo utilizado e as etapas que reproduzem o problema. Uma captura de tela pode ajudar se não expuser informações sensíveis.'
        ]),
        section('privacy', 'Privacidade', [
          'Use o contato abaixo para pedidos de acesso, correção, exclusão ou outras questões de privacidade. Solicitações podem exigir análise manual e verificação razoável de identidade.'
        ]),
        section('community', 'Community ou denúncia de conteúdo', [
          'Inclua o link do pôster ou perfil, o motivo da denúncia e o contexto que ajude na análise. Não inclua informações pessoais ou sensíveis sem relação com o caso.'
        ]),
        section('contact', 'Falar com o Suporte', [
          `Envie um email para ${SUPPORT_EMAIL}. Analisaremos a solicitação e responderemos dentro do razoável conforme sua natureza e complexidade.`
        ])
      ]
    }
  }
}

// Spanish and Chinese carry the same material rules without relying on i18n fallback.
LEGAL_CONTENT.es = {
  common: { version: 'Versión', effective: 'Vigencia', updated: 'Última actualización', contents: 'En esta página', contactSupport: 'Contactar con Soporte' },
  terms: {
    title: 'Términos de Servicio',
    intro: 'Estos Términos explican cómo funciona Posterfy, qué incluye Print-Ready y las reglas que ayudan a mantener la plataforma justa y confiable.',
    sections: [
      section('posterfy', '1. Acerca de Posterfy', ['Posterfy es una plataforma para crear, editar, visualizar y exportar pósteres personalizados relacionados con álbumes musicales. Cuando esté disponible, los usuarios también pueden publicar pósteres en la Community.', 'Posterfy ofrece herramientas creativas de software. No vende álbumes, música, portadas ni productos físicos.']),
      section('free', '2. Funciones gratuitas', ['Posterfy ofrece una forma gratuita de crear y exportar pósteres. Los formatos, tamaños, marca de agua y demás funciones de la experiencia gratuita pueden evolucionar con el producto.']),
      section('print-ready', '3. Print-Ready', ['Print-Ready es un desbloqueo de pago de funciones avanzadas de exportación para el álbum seleccionado. Es una compra única, no una suscripción, y no tiene cargos recurrentes.', 'El desbloqueo queda vinculado a la cuenta Posterfy usada en la compra. Mientras esté activo, permite nuevas exportaciones de ese álbum, sin depender de un archivo concreto, y puede usarse con pósteres de ese álbum a los que la cuenta tenga acceso. Versiones o ediciones diferentes pueden tratarse como desbloqueos separados.'], ['Exportaciones elegibles en PNG y PDF listo para imprimir', 'Tamaños de exportación Normal y Extreme', 'Sin marca de agua Posterfy', 'Reexportaciones ilimitadas mientras el desbloqueo esté activo']),
      section('permanent', '4. Qué significa “permanente”', ['Cuando Posterfy describe un desbloqueo como permanente, significa que no vence por el paso del tiempo ni tiene cargos recurrentes mientras la cuenta y el desbloqueo sigan activos.', 'No es una promesa de que Posterfy, Internet o los servicios de terceros existirán indefinidamente o funcionarán siempre igual. Posterfy no utilizará cambios del servicio para retirar arbitrariamente un beneficio pagado válido.']),
      section('accounts', '5. Cuentas y seguridad', ['Print-Ready requiere una cuenta Posterfy. Eres responsable de mantenerla segura y de la actividad realizada en ella. No se deben compartir cuentas ni usarlas para fraude, evasión de pagos o abuso.', 'Eliminar permanentemente una cuenta elimina sus desbloqueos Print-Ready. Si se ofrece una opción de eliminación, esta consecuencia también deberá mostrarse en ese flujo.']),
      section('payments', '6. Precios y pagos', ['El precio total se muestra antes de la compra. Print-Ready se procesa como pago único mediante Stripe, un procesador de pagos externo. Posterfy no almacena el número completo de tu tarjeta ni su código de seguridad.', 'Según tu país y medio de pago, conversiones de moneda, comisiones del emisor o impuestos aplicables pueden afectar el importe final cobrado o mostrado por tu proveedor.']),
      section('ownership', '7. Contenido y propiedad intelectual', ['Posterfy posee o licencia su software, marca, interfaz, identidad visual y materiales originales. Conservas los derechos que tengas sobre los elementos que crees o añadas.', 'Los nombres de artistas y álbumes, portadas, marcas, metadatos y otros materiales pueden pertenecer a terceros. Comprar Print-Ready da acceso a una función de Posterfy; no vende un álbum, transfiere derechos de autor o marca, concede una licencia comercial sobre contenido de terceros ni implica respaldo de artistas o sellos.', 'Eres responsable de que tu uso de los archivos exportados sea apropiado para tus circunstancias y respete los derechos y normas aplicables.']),
      section('community', '8. Community', ['Los pósteres públicos pueden ser vistos por otras personas. Los privados siguen sujetos a los controles de acceso de Posterfy. Eres responsable del contenido que publicas voluntariamente y no debes publicar contenido ilegal, abusivo o que vulnere derechos de forma relevante.', 'Respecto del contenido cuyos derechos pertinentes controles, concedes a Posterfy una licencia limitada y no exclusiva para alojarlo, procesarlo, mostrarlo y distribuirlo dentro de Posterfy solo en lo necesario para operar, promocionar dentro de la plataforma y moderar la Community. Posterfy no se convierte en propietario de tus pósteres.', 'Posterfy puede revisar, restringir o retirar contenido cuando sea razonablemente necesario para aplicar estos Términos, responder a denuncias, proteger a usuarios o cumplir obligaciones aplicables.']),
      section('acceptable-use', '9. Uso adecuado y medidas', ['Se prohíben el fraude, la manipulación del sistema, los contracargos abusivos, los intentos de obtener beneficios pagados sin pago válido y las infracciones materiales de estos Términos.', 'Cuando las circunstancias lo justifiquen, Posterfy puede adoptar medidas proporcionales como limitar acceso, suspender una cuenta, retirar contenido o revocar el desbloqueo afectado. Buscamos vincular la medida al problema documentado y no actuar arbitrariamente.']),
      section('availability', '10. Disponibilidad y cambios', ['Posterfy puede corregir errores, cambiar la interfaz, mejorar formatos, añadir o retirar funciones, realizar mantenimiento y adaptarse a servicios externos. Puede haber interrupciones temporales y no se promete disponibilidad absoluta.', 'Si un cambio afecta materialmente una función pagada, Posterfy buscará una solución razonable compatible con la ley aplicable y no destruirá deliberadamente beneficios pagados válidos sin motivo legítimo.']),
      section('liability', '11. Responsabilidad y límites', ['En la medida máxima permitida por la ley aplicable, Posterfy no responde por indisponibilidad temporal, acciones o fallos de terceros, uso indebido del usuario o hechos fuera de su control razonable.', 'Nada en estos Términos excluye o limita responsabilidades o derechos del consumidor que legalmente no puedan excluirse o limitarse.']),
      section('updates', '12. Cambios en estos Términos', ['Posterfy puede actualizar estos Términos a medida que evolucionen el servicio, la ley o las prácticas comerciales. Los cambios materiales tendrán nueva versión y fecha, y se podrá informar a los usuarios cuando corresponda.', 'La versión registrada con una compra anterior no será sustituida silenciosamente en el registro de esa compra.']),
      section('contact', '13. Contacto y derechos obligatorios', [`Las consultas pueden enviarse a ${SUPPORT_EMAIL}. Se conservan los derechos obligatorios previstos por la ley aplicable a cada usuario.`])
    ]
  },
  privacy: {
    title: 'Política de Privacidad',
    intro: 'Esta Política explica qué información trata Posterfy, para qué la usa y cómo contactarnos sobre privacidad.',
    sections: [
      section('account-data', '1. Datos de la cuenta', ['Al iniciar sesión, Posterfy puede recibir y almacenar nombre, nombre de usuario, correo electrónico, imagen de perfil, referencia del proveedor de cuenta y ajustes. Los usamos para autenticarte, operar tu cuenta, prestar soporte y proteger el servicio.']),
      section('content', '2. Pósteres, perfiles y Community', ['Posterfy trata diseños de pósteres, información de álbumes, opciones de publicación y visibilidad, información de perfil y actividad relacionada para permitir crear, guardar, mostrar y publicar contenido según tus elecciones.', 'Los pósteres y perfiles públicos pueden ser vistos por otras personas. El contenido privado sigue sujeto a controles de acceso y puede consultarse cuando sea razonablemente necesario para soporte, seguridad o moderación.']),
      section('purchases', '3. Compras', ['En compras Print-Ready, Posterfy puede conservar una referencia de compra, la cuenta, el álbum seleccionado, importe, moneda, estado, fechas e identificadores necesarios para soporte y conciliación.', 'Stripe procesa los pagos. Posterfy no almacena números completos de tarjeta ni códigos de seguridad. Los datos de compra se usan para Checkout, entrega del desbloqueo, reembolsos, disputas, prevención de fraude, soporte, contabilidad y auditoría.']),
      section('browser-storage', '4. Almacenamiento del navegador', ['Posterfy puede guardar información limitada en tu navegador para autenticación, preferencias como idioma y tema, y continuidad temporal del trabajo. Por ejemplo, un estado del editor de duración limitada puede ayudarte a volver al póster tras iniciar sesión o pasar por Checkout.', 'El almacenamiento del navegador no prueba un pago. Puedes borrarlo desde el navegador, aunque esto puede cerrar tu sesión o eliminar preferencias y trabajo temporal.']),
      section('providers', '5. Proveedores de servicios', ['Posterfy usa proveedores para prestar el servicio, incluidos Google para autenticación, Stripe para pagos, Spotify para información musical y de álbumes, servicios de alojamiento y almacenamiento de datos, y Google Analytics o Google Tag Manager para analítica.', 'Estos proveedores pueden tratar información según sus propios términos y políticas. Posterfy comparte solo lo razonablemente necesario para cada función.']),
      section('analytics', '6. Analítica y cookies', ['Posterfy puede usar tecnologías analíticas para comprender visitas, interacciones, características del dispositivo o navegador, ubicación aproximada y rendimiento del producto, con el fin de entender el uso y mejorar el producto.', 'La analítica puede usar cookies o identificadores similares. Las preferencias disponibles y obligaciones de consentimiento varían según la jurisdicción y la configuración del navegador o proveedor.']),
      section('retention', '7. Conservación', ['La naturaleza y finalidad de los datos, estado de la cuenta, necesidades operativas, disputas, prevención de fraude y obligaciones legales determinan la conservación. El estado temporal del editor se guarda por un período limitado. Los datos de cuenta se conservan normalmente mientras exista la cuenta y cuando exista una necesidad legítima posterior.', 'La información de Community se conserva normalmente mientras esté publicada o sea necesaria para operar y moderar. Los registros financieros pueden conservarse para soporte, reembolsos, disputas, fraude, contabilidad y obligaciones legales. Los registros operativos siguen las prácticas vigentes de seguridad y operación.']),
      section('rights', '8. Tus derechos de privacidad', [`Según la ley aplicable, puedes solicitar acceso, corrección, eliminación, información sobre el tratamiento u otros derechos disponibles escribiendo a ${SUPPORT_EMAIL}. Algunas solicitudes requieren revisión manual, verificación de identidad o conservación limitada permitida o exigida por ley.`]),
      section('security', '9. Seguridad', ['Posterfy aplica medidas administrativas y técnicas razonables. Ningún servicio en línea garantiza seguridad absoluta; protege tu cuenta y contáctanos si sospechas un acceso no autorizado.']),
      section('updates-contact', '10. Actualizaciones y contacto', [`Esta Política puede actualizarse con Posterfy y sus prácticas. Las revisiones materiales reciben nueva versión y fecha. Las consultas o solicitudes de privacidad pueden enviarse a ${SUPPORT_EMAIL}.`])
    ]
  },
  refund: {
    title: 'Política de Reembolso',
    intro: 'Esta Política explica cómo se revisan las solicitudes de reembolso de Print-Ready, preservando los derechos obligatorios disponibles.',
    sections: [
      section('mandatory-rights', '1. Derechos obligatorios', ['Nada en esta Política limita los derechos obligatorios de reembolso, desistimiento, cancelación o protección del consumidor previstos por la ley aplicable.']),
      section('voluntary-requests', '2. Solicitudes voluntarias', ['Fuera de los casos exigidos por ley, las solicitudes se revisan individualmente. Presentar una solicitud no garantiza su aprobación. Consideramos la compra, el uso de la función pagada, los hechos técnicos y otras circunstancias relevantes.']),
      section('situations', '3. Situaciones que podemos considerar', ['Las siguientes circunstancias pueden justificar una revisión. La lista es ilustrativa y no promete automáticamente un reembolso.'], ['Cobro duplicado o incorrecto', 'Pago completado sin entrega del desbloqueo y sin solución posible', 'Fallo técnico material de Posterfy directamente relacionado con la compra', 'Otras circunstancias excepcionales evaluadas por Soporte']),
      section('request-info', '4. Información para la solicitud', [`Envía la solicitud a ${SUPPORT_EMAIL}. Podemos pedir tu cuenta Posterfy, nombre del álbum, fecha aproximada, recibo o referencia disponible y una descripción del problema.`, 'Nunca envíes contraseña, número completo de tarjeta, código de seguridad ni información sensible no relacionada.']),
      section('review', '5. Revisión y plazos', ['Contáctanos pronto tras detectar el problema para conservar registros e información técnica. Esta versión no establece un plazo fijo para solicitudes discrecionales. El tiempo depende de las circunstancias, la información y el procesamiento del medio de pago.', 'Los plazos operativos no reducen derechos obligatorios.']),
      section('unlock', '6. Reembolso y acceso Print-Ready', ['Un reembolso cambia el estado financiero, mientras el acceso se gestiona por separado. Un reembolso total normalmente permitirá revocar el desbloqueo relacionado. En algunos casos, Posterfy puede mantenerlo como cortesía.', 'Ni la continuidad ni la revocación se prometen automáticamente en todos los casos; depende del motivo, los derechos aplicables y la solución.']),
      section('chargebacks', '7. Contracargos, fraude y abuso', ['Si no reconoces un cobro o tienes un problema, contacta con Soporte. Nada impide ejercer derechos disponibles mediante el emisor o la ley.', 'Fraude documentado, contracargos abusivos, manipulación o intentos de conservar varios beneficios sin pago válido pueden dar lugar a medidas proporcionales, incluida la limitación o revocación del acceso afectado.']),
      section('contact', '8. Contacto', [`Las consultas y solicitudes pueden enviarse a ${SUPPORT_EMAIL}.`])
    ]
  },
  support: {
    title: 'Soporte', intro: 'Incluye los detalles relacionados con tu problema para que podamos ayudarte con más eficacia.',
    sections: [
      section('billing', 'Facturación y Print-Ready', ['Para compras, desbloqueos o reembolsos, incluye tu cuenta, álbum, fecha aproximada, recibo o referencia disponible y una breve descripción. Nunca envíes el número completo de tarjeta ni el código de seguridad.']),
      section('account', 'Cuenta', ['Describe el problema de inicio de sesión, perfil, acceso o seguridad e indica el correo asociado. Nunca envíes tu contraseña.']),
      section('technical', 'Problema técnico', ['Explica qué esperabas, qué ocurrió, el navegador o dispositivo y los pasos para reproducirlo. Una captura puede ayudar si no expone información sensible.']),
      section('privacy', 'Privacidad', ['Usa el contacto inferior para solicitudes de acceso, corrección, eliminación u otras cuestiones. Pueden requerir revisión manual y verificación razonable de identidad.']),
      section('community', 'Community o denuncia de contenido', ['Incluye el enlace del póster o perfil, el motivo y el contexto útil. No incluyas información personal o sensible no relacionada.']),
      section('contact', 'Contactar con Soporte', [`Escribe a ${SUPPORT_EMAIL}. Revisaremos la solicitud y responderemos razonablemente según su naturaleza y complejidad.`])
    ]
  }
}

LEGAL_CONTENT.zh = {
  common: { version: '版本', effective: '生效日期', updated: '最后更新', contents: '本页内容', contactSupport: '联系支持' },
  terms: {
    title: '服务条款', intro: '本条款说明 Posterfy 的运作方式、Print-Ready 所包含的内容，以及维护平台公平与可靠的规则。',
    sections: [
      section('posterfy', '1. 关于 Posterfy', ['Posterfy 是一个用于创建、编辑、查看和导出音乐专辑主题个性化海报的平台。在相关功能可用时，用户也可以向 Community 发布海报。', 'Posterfy 提供创作软件工具，不销售专辑、音乐、专辑封面或实体商品。']),
      section('free', '2. 免费功能', ['Posterfy 提供免费创建和导出海报的方式。免费体验中的格式、尺寸、水印及其他功能可能随产品改进而调整。']),
      section('print-ready', '3. Print-Ready', ['Print-Ready 是针对所选专辑的高级导出功能付费解锁。它是一次性购买，不是订阅，也没有周期性收费。', '解锁与购买时使用的 Posterfy 账户绑定。在账户与解锁有效期间，用户可以为该专辑重新导出，而不局限于某一个文件，并可用于该账户有权访问的该专辑海报。专辑的不同版本或发行版可能被视为不同的解锁项目。'], ['符合条件的 PNG 与印刷就绪 PDF 导出', 'Normal 与 Extreme 导出尺寸', '无 Posterfy 水印', '解锁有效期间可无限次重新导出']),
      section('permanent', '4. “永久”的含义', ['Posterfy 所称“永久解锁”，是指在账户和解锁保持有效时，解锁不会因时间到期，也不会产生周期性收费。', '这不表示 Posterfy、互联网或第三方服务将无限期存在或始终以完全相同的方式运行。Posterfy 不会以服务变更为由任意取消有效的付费权益。']),
      section('accounts', '5. 账户与安全', ['Print-Ready 需要 Posterfy 账户。你有责任保护账户安全并对账户内活动负责。不得共享账户或将账户用于欺诈、逃避付款或滥用平台。', '永久删除账户会移除相关的 Print-Ready 解锁。如果提供账户删除选项，该后果也应在相应流程中显示。']),
      section('payments', '6. 价格与付款', ['购买前会显示总价。Print-Ready 通过第三方支付处理商 Stripe 作为一次性付款处理。Posterfy 不存储完整银行卡号或安全码。', '根据国家/地区和付款方式，货币转换、发卡机构费用或适用税费可能影响服务商显示或收取的最终金额。']),
      section('ownership', '7. 内容与知识产权', ['Posterfy 拥有或获许可使用其软件、品牌、界面、视觉识别和原创材料。你保留对自己创建或添加元素所拥有的权利。', '艺术家和专辑名称、封面、商标、元数据及其他材料可能属于第三方。购买 Print-Ready 只是获得 Posterfy 功能；不会购买专辑、转让著作权或商标权、授予第三方内容的商业许可，也不表示艺术家或唱片公司认可 Posterfy。', '你有责任确保导出文件的使用适合自身情况并遵守适用的权利与规则。']),
      section('community', '8. Community', ['公开海报可被他人查看；私密海报仍受 Posterfy 访问控制。你对自愿发布的内容负责，不得发布违法、辱虐或实质侵权内容。', '对于你控制相关权利的内容，你仅在运营、站内推广和管理 Community 所必需的范围内，授予 Posterfy 有限、非独占的许可，以在 Posterfy 内托管、处理、展示和分发这些内容。Posterfy 不会因此成为你海报的所有者。', '为执行本条款、处理举报、保护用户或履行适用义务，Posterfy 可在合理必要时审查、限制或移除内容。']),
      section('acceptable-use', '9. 合理使用与处理措施', ['禁止欺诈、操纵系统、滥用拒付、试图在无有效付款时获得付费权益，以及严重违反本条款。', '在具体情况有依据时，Posterfy 可采取与问题相称的措施，例如限制访问、暂停账户、移除内容或撤销受影响的解锁。处理措施将尽量针对有记录的问题，而非任意执行。']),
      section('availability', '10. 可用性与服务变更', ['Posterfy 可修复错误、更改界面、改进导出格式、增减功能、进行维护，并适应第三方服务变化。服务可能暂时中断，不承诺绝对可用性。', '如果变更实质影响付费功能，Posterfy 将寻求符合适用法律的合理方案，不会无正当理由故意取消有效的付费权益。']),
      section('liability', '11. 责任与限制', ['在适用法律允许的最大范围内，Posterfy 不对暂时不可用、第三方行为或故障、用户不当使用或超出 Posterfy 合理控制的事件负责。', '本条款不排除或限制依法不能排除或限制的责任或消费者权利。']),
      section('updates', '12. 条款变更', ['Posterfy 可随服务、法律或商业实践的发展更新本条款。重大变更会采用新版本和更新日期，并可在适当时通知用户。', '与既往购买一同记录的条款版本不会在该购买记录中被静默替换。']),
      section('contact', '13. 联系与强制性权利', [`问题可发送至 ${SUPPORT_EMAIL}。适用于你的法律所规定的强制性权利不受影响。`])
    ]
  },
  privacy: {
    title: '隐私政策', intro: '本政策说明 Posterfy 处理哪些信息、使用目的，以及如何就隐私事项联系我们。',
    sections: [
      section('account-data', '1. 账户数据', ['登录时，Posterfy 可能接收并存储姓名、用户名、电子邮箱、头像、账户提供商参考信息和账户设置，用于身份验证、账户运营、支持与服务保护。']),
      section('content', '2. 海报、个人资料与 Community', ['Posterfy 处理海报设计、专辑信息、发布和可见性选择、个人资料及相关活动，以便按你的选择创建、保存、展示和发布内容。', '公开海报与公开资料可被他人查看。私密内容受访问控制，并可能在支持、安全或管理所合理需要时被访问。']),
      section('purchases', '3. 购买', ['对于 Print-Ready 购买，Posterfy 可能保留购买参考信息、账户、所选专辑、金额、币种、状态、时间及支持和财务核对所需的标识信息。', '付款由 Stripe 处理。Posterfy 不存储完整银行卡号或安全码。购买信息用于 Checkout、交付解锁、退款、争议、反欺诈、支持、会计和审计。']),
      section('browser-storage', '4. 浏览器存储', ['Posterfy 可能在浏览器中存储有限信息，用于身份验证、语言和主题等偏好，以及临时延续编辑工作。例如，保存期有限的编辑器状态可帮助你在登录或 Checkout 后返回海报。', '浏览器存储不作为付款证明。你可以通过浏览器清除，但这可能使账户退出或删除偏好和临时工作状态。']),
      section('providers', '5. 服务提供商', ['Posterfy 使用相关服务商，包括用于身份验证的 Google、用于付款的 Stripe、用于音乐和专辑信息的 Spotify、托管和数据存储服务，以及用于使用分析的 Google Analytics 或 Google Tag Manager。', '这些提供商可能依据各自的条款和隐私政策处理信息。Posterfy 仅分享相应功能合理所需的信息。']),
      section('analytics', '6. 分析与 Cookie', ['Posterfy 可能使用分析技术了解访问、互动、设备或浏览器特征、大致位置和产品表现，以理解使用情况并改进产品。', '分析及类似技术可能使用 Cookie 或类似浏览器标识。可用偏好和同意义务因司法管辖区及浏览器或提供商设置而异。']),
      section('retention', '7. 保存期限', ['信息性质与目的、账户状态、运营需求、争议、反欺诈及法律义务共同决定保存期限。临时编辑器状态仅保存有限时间。账户数据通常在账户存在期间及之后有正当需要时保留。', 'Community 信息通常在发布期间或运营与管理所需期间保留。财务记录可能因支持、退款、争议、反欺诈、会计和法律义务而保留。运营日志依当前安全和运营实践保存。']),
      section('rights', '8. 你的隐私权利', [`根据适用法律，你可通过 ${SUPPORT_EMAIL} 请求访问、更正、删除、了解处理情况或行使其他可用权利。部分请求需要人工审核、身份验证，或在法律允许或要求时保留有限信息。`]),
      section('security', '9. 安全', ['Posterfy 采取合理的管理和技术措施保护信息。任何在线服务都无法保证绝对安全；请保护账户，并在怀疑未经授权访问时联系我们。']),
      section('updates-contact', '10. 更新与联系', [`本政策可能随 Posterfy 及其实践更新。重大修订会采用新版本和日期。隐私问题或请求可发送至 ${SUPPORT_EMAIL}。`])
    ]
  },
  refund: {
    title: '退款政策', intro: '本政策说明 Print-Ready 退款请求的审核方式，同时保留你享有的强制性权利。',
    sections: [
      section('mandatory-rights', '1. 强制性权利', ['本政策不限制适用于你的法律所规定的强制退款、撤回、取消或消费者保护权利。']),
      section('voluntary-requests', '2. 自愿退款请求', ['除法律要求的情形外，退款请求将逐案审核。提出请求不保证批准。我们会考虑购买、付费功能使用、技术事实及其他相关情况。']),
      section('situations', '3. 可能考虑的情况', ['以下情况可能支持审核，但仅为示例，不构成自动退款承诺。'], ['重复或错误收费', '付款完成但未交付解锁且问题无法解决', '与购买直接相关的 Posterfy 重大技术故障', '由支持团队评估的其他特殊情况']),
      section('request-info', '4. 请求所需信息', [`请发送至 ${SUPPORT_EMAIL}。为定位和审核购买，我们可能要求账户、专辑名称、大致付款日期、可用的收据或交易参考信息，以及问题说明。`, '切勿发送密码、完整银行卡号、安全码或无关敏感信息。']),
      section('review', '5. 审核与时间', ['发现问题后请尽快联系，以便相关记录和技术信息仍可使用。本版政策未设定酌情退款请求的固定期限。审核时间取决于具体情况、所提供信息及支付渠道处理。', '运营时间不减少适用法律规定的强制性权利。']),
      section('unlock', '6. 退款与 Print-Ready 访问', ['退款改变购买的财务状态，而 Print-Ready 访问单独管理。全额退款通常可使 Posterfy 撤销相关解锁；在某些情况下也可作为善意安排予以保留。', '并非每种情况都自动承诺保留或撤销访问；结果取决于原因、适用权利和处理方案。']),
      section('chargebacks', '7. 拒付、欺诈与滥用', ['如不认识某项收费或购买存在问题，请联系支持以便调查。本条款不妨碍你通过发卡机构或适用法律行使权利。', '有记录的欺诈、滥用拒付、系统操纵或试图在无有效付款时保留多项付费权益，可能导致相称措施，包括限制或撤销受影响的访问。']),
      section('contact', '8. 联系', [`退款问题和请求可发送至 ${SUPPORT_EMAIL}。`])
    ]
  },
  support: {
    title: '支持', intro: '请提供与问题相关的信息，以便我们更有效地协助你。',
    sections: [
      section('billing', '付款与 Print-Ready', ['购买、解锁或退款问题请提供账户、专辑名称、大致付款日期、可用收据或交易参考信息以及简要说明。切勿发送完整银行卡号或安全码。']),
      section('account', '账户', ['请说明登录、个人资料、访问或安全问题，并提供账户关联邮箱。切勿发送密码。']),
      section('technical', '技术问题', ['请说明预期结果、实际情况、所用浏览器或设备以及复现步骤。不包含敏感信息的截图可能有帮助。']),
      section('privacy', '隐私', ['访问、更正、删除或其他隐私请求请使用下方联系方式。请求可能需要人工审核和合理身份验证。']),
      section('community', 'Community 或内容举报', ['请提供海报或个人资料链接、举报原因及有助审核的背景，不要提供无关个人或敏感信息。']),
      section('contact', '联系支持', [`请发送邮件至 ${SUPPORT_EMAIL}。我们会根据请求的性质与复杂程度，在合理范围内审核并回复。`])
    ]
  }
}

export const getLegalContent = (language = 'en') => {
  const normalized = language.toLowerCase().split('-')[0]
  return LEGAL_CONTENT[normalized] || LEGAL_CONTENT.en
}

export { SUPPORT_EMAIL }
