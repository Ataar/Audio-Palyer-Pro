import { Component } from '@angular/core';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent {
  audioFiles = [
    { audio: 'assets/audio/1mp4_rrv0wHLB.mp3', playing: false },
    { audio: 'assets/audio/2mp4_QNM1yUR5.mp3', playing: false },
    { audio: 'assets/audio/3_0b4KrBAO.mp3', playing: false },
    { audio: 'assets/audio/4.mp3', playing: false },
    { audio: 'assets/audio/5mp4_kAPP35NP.mp3', playing: false },
    { audio: 'assets/audio/6ya_lili_yalila.mp3', playing: false },
    { audio: 'assets/audio/7vande_mataram.mp3', playing: false },
    { audio: 'assets/audio/8mp4_FEf7X0hs.mp3', playing: false },
    { audio: 'assets/audio/9mp4_mIWlqV9m.mp3', playing: false },
    { audio: 'assets/audio/10mp4_FNJ9lgxA.mp3', playing: false },
    { audio: 'assets/audio/11.mp3', playing: false },
    { audio: 'assets/audio/12mp4_pIEz2h5t.mp3', playing: false }
  ];
  

  colors = [
    'lightgray',
    'lightcoral',
    'lightgreen',
    'lightblue',
    'GreenYellow',
    '#490a0a',
    'pink',
    'gray',
    '#583d6c',
    '#bb5f91',
    '#141313',
    '#11b072'
  ];

  private currentAudio: HTMLAudioElement | null = null;
  private currentIndex: number | null = null;

  toggleMusic(audioPath: string, index: number): void {
    if (
      this.currentAudio &&
      this.currentAudio.src !== new URL(audioPath, document.baseURI).href
    ) {
      this.currentAudio.pause();
      if (this.currentIndex !== null) {
        this.audioFiles[this.currentIndex].playing = false;
      }
    }

    if (
      !this.currentAudio ||
      this.currentAudio.src !== new URL(audioPath, document.baseURI).href
    ) {
      this.currentAudio = new Audio(audioPath);
      this.currentIndex = index;

      this.currentAudio.addEventListener('ended', () => {
        this.audioFiles[index].playing = false;
      });
    }

    if (!this.currentAudio.paused) {
      this.currentAudio.pause();
      this.audioFiles[index].playing = false;
    } else {
      this.currentAudio.play().catch((error) => {
        console.error('Error playing audio:', error);
      });
      this.audioFiles[index].playing = true;
    }
  }
}
