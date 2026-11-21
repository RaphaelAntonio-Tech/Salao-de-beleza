# Salão de beleza - Rosa & Luz + Sistema de agendamento
## Objetivo
 Desenvolver uma landing page atrativa acompanhada com um sistema de agendamento.
 ---

 ## Usuarios do sistema
 - Administrador
 ---
 
 ## Problemas identificados
 - Falta de organização com horários
 - Dificuldade em fazer o cliente retornar com frequência ou em implementar estratégias de pós-venda eficazes.
 - Dificuldade em gerenciar o capital de giro, controlar o fluxo de caixa e calcular o custo real dos serviços (levando a preços que geram prejuízo).
 - Crescimento de redes organizadas, barbearias modernas e profissionais autônomos, exigindo forte presença nas redes sociais e clara diferenciação.
 - Equipes que dominam apenas a técnica, mas pecam no atendimento ao cliente, na fidelização, em técnicas de vendas e na postura no ambiente de trabalho.
---

## Requisitos Funcionais 
- RF01 - Agendar atendimento
- RF02 - Editar agendamento
- RF03 - Excluir agendamento 
- RF04 - Cadastrar serviço
- RF05 - Editar Serviço
---

## Requisitos não funcionais
- RNF01 - O sistemas deve funcionar em dispositivos móveis
- RNF02 - Apenas usuários autorizados poderão acessar determinadas funcionalidades
- RNF03 - A aplicação deve ser leve, consumindo poucos recursos de processamento e memória para rodar bem em dispositivos móveis e computadores simples.
- RNF04 - O Administrador pode colocar um limite de agendamento diário
- RNF05 - O fluxo de agendamento deve ser intuitivo, permitindo que um usuário leigo conclua um agendamento em no máximo 3 cliques ou passos. 
- RNF06 - A landing page deve conter: home, sobre o salão, profissionais, horários de funcionamento, localização, contanto e botão agendar horário + horários disponíveis
---

## Regras de negócio
- RN01 - Cada cliente deve informar nome, telefone, serviço, profissional, data e horário para concluir o agendamento
- RN02 - Haverá um limite de agendamento diário (dependendo da demanda)
- RN03 - Apenas administradores podem excluir os horários marcados
- RN04 - Se houver agendamentos no mesmo horário com o mesmo profissional não será possível agendar
- RN05 - Se o salão estiver com muita demanda, não haverá possibilidade de agendar no mesmo dia

## Caracteristicas
- Os serviços do salão vão ser: Cabelos [(Cortes e finalização: cortes femininos, masculinos e infantis, escova, modelagem e penteados.),(Cor e química: coloração, mechas/luzes, alisamentos, relaxamentos e mega hair / alongamento.),(Tratamentos e terapia capilar: hidratação, nutrição, reconstrução, cauterização, cronograma capilar e cuidados com cachos.)], Unhas e pés[(Esmalteria: manicure, pedicure, esmaltação em gel e alongamento de unhas.),(Cuidados especializados: spa dos pés e serviços de podologia.)], Rosto, olhar e maquiagem [(Maquiagem: maquiagem social, profissional e para eventos.),(Sobrancelhas e cílios: design de sobrancelhas, coloração/henna, alongamento e lifting de cílios.),(Estética facial: limpeza de pele, hidratação facial e tratamentos estéticos faciais)], Corpo, depilação e bem-estar[(Depilação: cera, linha ou outras técnicas por áreas do corpo.),(Massagens e estética corporal: massagem relaxante, drenagem linfática, massagem redutora e bronzeamento.)]

