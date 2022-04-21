import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

const formatDate = oldDate => {
    return format(Date.parse(oldDate), "MM/dd/yyyy' at 'HH:mm", { locale: ptBR });
}

export default formatDate;