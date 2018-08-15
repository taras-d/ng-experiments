import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

const data = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus semper sollicitudin. Nullam quis ligula augue. Aenean sagittis lectus dolor, sed commodo lectus venenatis id. Nam sollicitudin malesuada diam, at rhoncus libero lacinia ac. Mauris ut mi a nisl facilisis aliquam. Aliquam non facilisis ipsum. Donec ante turpis, pulvinar pellentesque iaculis at, cursus eget mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent ut condimentum quam, sed eleifend quam.',

  'Nulla pellentesque lorem ante, at maximus lorem fringilla a. Sed ac blandit arcu, a volutpat leo. Nunc congue laoreet accumsan. Suspendisse ultricies, leo vitae maximus fermentum, augue nibh finibus lacus, a tempor ex libero ut nisi. Nam dignissim arcu velit, faucibus aliquet ex sodales non. Fusce lacinia aliquet elit, at porttitor risus malesuada ac. Nam congue iaculis dignissim. Ut mattis lacus sit amet enim suscipit, eu rutrum ex lacinia. Mauris massa tortor, euismod id pulvinar rhoncus, bibendum nec ante. Proin scelerisque sem at tortor rhoncus, in maximus sapien aliquet. Duis eget suscipit neque. Quisque vel suscipit nunc. Vivamus gravida velit nisl, sit amet sollicitudin dui semper ut. Ut molestie nulla ac sapien pretium ornare. Vestibulum pellentesque mollis turpis in varius.',

  'Quisque id mauris dapibus, consequat elit in, finibus elit. Pellentesque consectetur mattis arcu, eget dapibus augue viverra vel. Donec ultricies sagittis ante quis lobortis. Nam porttitor diam arcu, non fermentum augue elementum et. Ut viverra pretium feugiat. Vivamus quis quam eget mi semper sollicitudin. Aliquam in lorem cursus, varius ligula nec, tincidunt tellus. Cras accumsan leo quis porttitor vehicula. Aliquam rutrum aliquet fringilla. Vestibulum efficitur dolor eget commodo cursus. Integer dapibus ante id nunc vehicula pharetra.',

  'Vivamus consequat est eu consequat auctor. Fusce consequat lacus dignissim arcu congue, sed molestie lacus convallis. Vestibulum ut placerat lorem. Duis consectetur, libero id tempus rhoncus, libero felis pretium sem, quis aliquet felis lacus quis augue. In ac purus nec sem sodales dapibus. In tincidunt tempor purus. Cras condimentum augue fermentum faucibus pellentesque. Morbi eleifend in erat id ullamcorper. Sed suscipit in justo ut consequat. Proin ligula lorem, interdum quis varius non, pharetra tincidunt turpis. Aenean a libero non arcu convallis egestas. Pellentesque a efficitur lacus. Fusce vitae volutpat metus.',

  'Etiam nec nibh est. Cras eleifend gravida ex porta venenatis. Integer luctus ut quam id mollis. Sed gravida varius porttitor. Fusce eleifend neque augue, vel elementum tortor dapibus vel. Morbi mattis sit amet neque sit amet mollis. Ut egestas at libero non pellentesque. Aliquam lacus massa, aliquet eget dui eu, aliquet placerat mi. Praesent lacus arcu, bibendum id fringilla sed, tempus in est. Cras nulla sapien, porttitor in pharetra id, convallis sed eros. Vivamus tincidunt, lectus nec pellentesque sagittis, metus dolor accumsan dui, sit amet molestie leo libero non sapien. In auctor augue odio, sit amet semper est vulputate mattis. Donec efficitur purus viverra lectus convallis, id iaculis dolor ultricies. Sed venenatis mattis magna non sodales. Vivamus sed sapien eu ligula luctus pharetra.',

  'Ut euismod metus eu est consectetur ornare. Aliquam ipsum lectus, pulvinar a dictum et, lobortis vitae ex. Vestibulum volutpat nulla augue, tempus finibus arcu dapibus sit amet. In porttitor consequat nibh, et varius metus sollicitudin sit amet. Nullam eros magna, condimentum quis metus eu, porta malesuada enim. Cras varius tellus vel dapibus gravida. Vestibulum laoreet dignissim libero sed facilisis. Etiam ac tortor ligula. Curabitur cursus, augue vel aliquet scelerisque, est tellus placerat neque, a molestie libero turpis quis nisi. Nunc velit ex, venenatis iaculis euismod nec, gravida vitae ligula. Ut sapien tellus, interdum ac facilisis et, imperdiet vel tortor. Praesent vitae condimentum urna. Nulla vitae lacus est. Aenean dignissim tristique arcu, vitae eleifend sapien lacinia ac.',
  
  'Vivamus a egestas magna, eget consequat nibh. In mi mi, egestas a hendrerit in, varius et dolor. Nulla lorem diam, auctor et nibh nec, convallis euismod risus. Nullam gravida tellus sit amet tempus scelerisque. Nunc blandit lectus id felis sollicitudin lacinia. Duis tempus tristique sapien convallis porta. Integer volutpat nunc nibh, vitae consectetur nisl laoreet vel. Ut pulvinar fermentum justo. Nam ullamcorper, tellus et fringilla auctor, nisi augue finibus lacus, auctor placerat augue mauris et metus. Nulla ac velit gravida, congue orci id, elementum dolor.',

  'Donec vitae sem in enim bibendum rutrum eu placerat lectus. Suspendisse et augue at sapien facilisis iaculis et eu nisl. Duis vestibulum tincidunt ante nec sodales. Vestibulum sit amet enim sed nibh laoreet finibus. Donec leo sem, dictum quis faucibus vitae, pulvinar quis sem. Donec pulvinar nibh ante, sed pulvinar nulla pharetra at. Nunc sit amet risus dictum justo varius feugiat id et augue. Aliquam eu ex imperdiet, pulvinar erat vitae, auctor nisl.',

  'Nam interdum nulla lorem, quis rhoncus nunc maximus a. Curabitur rhoncus sagittis hendrerit. Suspendisse bibendum tincidunt luctus. Sed purus ipsum, egestas non placerat blandit, placerat in lorem. Quisque erat nisi, vehicula id posuere at, consectetur vitae ex. Donec sed justo porttitor, fermentum arcu eu, tempor mauris. Integer quis volutpat dui. Aenean id justo accumsan, iaculis odio sit amet, placerat ante.',

  'Cras ut turpis imperdiet, bibendum enim a, sagittis ipsum. Nulla pharetra enim dui, eget imperdiet velit porttitor vel. Pellentesque maximus ligula sed felis accumsan consequat. Duis at rutrum mi. Sed diam lacus, iaculis vitae blandit ut, posuere quis massa. Praesent tincidunt turpis vel est sodales, eget scelerisque lorem interdum. Aenean sollicitudin porta lacus ullamcorper convallis. Phasellus semper tellus vel risus consequat, id rhoncus ipsum pharetra. Integer eros dolor, faucibus et sem quis, fringilla ultricies velit. Vivamus bibendum eros ut magna vehicula ornare. Donec ac vulputate justo. Fusce posuere ac sapien a vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus sit amet ex sem. Aliquam dictum nisi eu nunc facilisis facilisis.'
];

@Pipe({
  name: 'loremIpsum'
})
export class LoremIpsumPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {

  }

  transform(value: any, startIndex: number = 0, count: number = 5): any {
    const html = data.slice(startIndex, startIndex + count).map(text => `<p>${text}</p>`).join('')
    return this.domSanitizer.bypassSecurityTrustHtml(html);
  }

}
